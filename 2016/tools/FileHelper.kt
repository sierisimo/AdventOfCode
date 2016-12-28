import java.io.File
import java.util.*

/**
 * Created by sierisimo on 12/28/16.
 */
object FileHelper {
    fun getInput(year: Int = 2016, problemNumber: Int, firstPart: Boolean): String {
        val problemDirectory = if (problemNumber < 10) {
            "0$problemNumber"
        } else {
            "$problemNumber"
        }

        val file = File("$year/$problemDirectory/${if (firstPart) {
            1
        } else {
            0
        }}/file.in")

        val fileScanner = Scanner(file)

        //println(fileScanner.)

        return ""
    }
}

fun main(args: Array<String>) {
    FileHelper.getInput(1, true)
}
