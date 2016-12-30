import adventofcode.FileHelper
import org.junit.Test
import kotlin.test.assertEquals

/**
 * Created by sierisimo on 12/29/16.
 */
class Day1KtTest {
    @Test
    fun test_blockToEasterBunnyHQ_empty() {
        val baseCase = listOf("")
        assertEquals("Should return a 0", 0, blockToEasterBunnyHQ(baseCase))
    }

    @Test
    fun test_blockToEasterBunnyHQ_square() {
        var squareCase = listOf("L2", "R2", "R2", "R2")
        assertEquals("Should return a 0", 0, blockToEasterBunnyHQ(squareCase))

        squareCase = listOf("R5","L5","L5","L5")
        assertEquals("Should return a 0", 0, blockToEasterBunnyHQ(squareCase))
    }

    @Test
    fun test_blockToEasterBunnyHQ_12(){
        val twelveCase = listOf("R5", "L5", "R5", "R3")
        assertEquals("Must return 12", 12, blockToEasterBunnyHQ(twelveCase))
    }

    @Test
    fun test_blockToEasterBunnyHQ_2(){
        val twelveCase = listOf("R2", "R2", "R2")
        assertEquals("Must return 12", 2, blockToEasterBunnyHQ(twelveCase))
    }

    @Test
    fun test_blockToEasterBunnyHQ_WithPrevious(){
        val twelveCase = listOf("R8", "R4", "R4", "R8")
        assertEquals("Must return 4 because of x:4, y:0", 4, blockToEasterBunnyHQ(twelveCase, isInPreviousLocation = true))
    }

    @Test
    fun parseCoordinate() {
        val originalStr = "L9"
        val expectedPair = Pair("L", 9)
        assertEquals("Check that parsing is correct", expectedPair, parseCoordinate(originalStr))
    }

    @Test
    fun parseCoordinate_threeDigits(){
        val originalStr = "R149"
        val expectedPair = Pair("R",149)
        assertEquals("Check that a number of 3 digits is valid", expectedPair, parseCoordinate(originalStr))
    }
}
