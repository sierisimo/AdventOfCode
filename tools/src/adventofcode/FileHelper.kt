package adventofcode

import java.io.File
import java.util.*

/**
 * Created by sierisimo on 12/28/16.
 */
object FileHelper {
    //FIXME: This could be improved in the way it works
    fun getInput(year: Int = 2016, problemNumber: Int, firstPart: Boolean = true): String {
        val file = File("$year/${
        if (problemNumber < 10) "0$problemNumber" else "$problemNumber"}/${
        if (firstPart) 1 else 2}/file.in")

        val fileScanner = Scanner(file)
        fileScanner.useDelimiter("")

        val str: StringBuilder = StringBuilder()

        while (fileScanner.hasNext()) {
            str.append(fileScanner.next())
        }

        return str.toString()
    }
}
