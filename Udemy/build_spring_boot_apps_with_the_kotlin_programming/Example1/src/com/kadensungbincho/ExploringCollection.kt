package com.kadensungbincho

fun main(args: Array<String>) {
    val colors = listOf("Red", "Green", "Blue")

    println(colors::class.qualifiedName)
    // immutable but ArrayList
    // something stop us from changing the object

    val days = mutableListOf("Monday", "Tuesday", "Wednesday")
    val numbers = mutableListOf<Int>()

    val months = setOf("Jan", "Feb")
    val mMonths = mutableSetOf("Jan", "Feb")

    val mapColors = mapOf("Red" to "ff0000", "blue" to "00fff00")

    val intArray: IntArray = intArrayOf(1, 2, 3, 4, 5)
    intArray.set(3, -4)
    intArray[3] = -7
    intArray.forEach { println(it) }
}
