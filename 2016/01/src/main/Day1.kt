import adventofcode.FileHelper

/**
 * Created by sierisimo on 12/29/16.
 */

fun blockToEasterBunnyHQ(directions: List<String>, previousVisitedSet: MutableSet<Pair<Int, Int>> = mutableSetOf(), isInPreviousLocation: Boolean = false): Int {
    var lastDirection = "-"
    var value = 0
    var x = 0
    var y = 0

    var previousPosition: Pair<Int, Int>? = null

    if (isInPreviousLocation) previousVisitedSet.add(Pair(x, y))

    return if (directions.isNotEmpty() && directions.first().isNotBlank()) {
        directions.map(::parseCoordinate)
                .reduce { pairAccumulated, nextPair ->
                    if (lastDirection == "-") {
                        value = if (pairAccumulated.first == "L") -1 else 1
                        x += pairAccumulated.second * value

                        if (isInPreviousLocation) {
                            if (x > 0) {
                                (0..(x - 1)).mapTo(previousVisitedSet) { Pair(it, 0) }
                            } else {
                                ((x + 1)..0).mapTo(previousVisitedSet) { Pair(it, 0) }
                            }
                        }

                        y += if (pairAccumulated.first == nextPair.first) {
                            value = -1
                            nextPair.second * value
                        } else {
                            value = 1
                            nextPair.second
                        }

                        lastDirection = "y"

                        if (isInPreviousLocation) {
                            if (y > 0) {
                                (0..(y - 1)).mapTo(previousVisitedSet) { Pair(x, it) }
                            } else {
                                ((y + 1)..0).mapTo(previousVisitedSet) { Pair(x, it) }
                            }
                        }

                        nextPair
                    } else {
                        val oldValue: Int

                        if (lastDirection == "y") {
                            value = if (value == -1 && nextPair.first == "L") 1
                            else if (value == 1 && nextPair.first == "L") -1
                            else value

                            lastDirection = "x"

                            oldValue = x
                            x += nextPair.second * value

                            if (isInPreviousLocation) {
                                if (oldValue < x) {
                                    (oldValue..(x - 1)).mapTo(previousVisitedSet) {
                                        val newPair = Pair(it, y)
                                        if (previousVisitedSet.contains(newPair) && previousPosition == null)
                                            previousPosition = newPair

                                        newPair
                                    }
                                } else {
                                    ((x + 1)..oldValue).mapTo(previousVisitedSet) {
                                        val newPair = Pair(it, y)
                                        if (previousVisitedSet.contains(newPair) && previousPosition == null)
                                            previousPosition = newPair

                                        newPair
                                    }
                                }
                            }
                        } else {
                            value = if (value == 1 && nextPair.first == "R") -1
                            else if (value == -1 && nextPair.first == "R") 1
                            else value

                            oldValue = y
                            y += nextPair.second * value
                            lastDirection = "y"

                            if (isInPreviousLocation) {
                                if (oldValue < y) {
                                    (oldValue..(y - 1)).mapTo(previousVisitedSet) {
                                        val newPair = Pair(x, it)
                                        if (previousVisitedSet.contains(newPair) && previousPosition == null)
                                            previousPosition = newPair

                                        newPair
                                    }
                                } else {
                                    ((y + 1)..oldValue).mapTo(previousVisitedSet) {
                                        val newPair = Pair(x, it)
                                        if (previousVisitedSet.contains(newPair) && previousPosition == null)
                                            previousPosition = newPair

                                        newPair
                                    }
                                }
                            }
                        }

                        nextPair
                    }
                }

        if (isInPreviousLocation && previousPosition != null) Math.abs(previousPosition!!.first) + Math.abs(previousPosition!!.second)
        else Math.abs(x) + Math.abs(y)
    } else 0
}

fun parseCoordinate(coordinate: String): Pair<String, Int> = Pair(coordinate[0].toString(),
        coordinate.substring(1..(coordinate.length - 1)).toString().toInt())

fun main(args: Array<String>) {
    val input = FileHelper.getInput(problemNumber = 1)
            .split(", ")
            .map(String::trim)
    println(blockToEasterBunnyHQ(input, isInPreviousLocation = true))
}
