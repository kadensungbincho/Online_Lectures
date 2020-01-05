package com.kadensungbincho.utilities

fun applyFunctionToAString(inputString: String, myFunction: (String) -> String) : String {
    return myFunction(inputString)
}

fun main(args: Array<String>) {
//    val result = applyFunctionToAString("hello") { x -> x[0].toUpperCase() + x.substring(1) }
    val result = applyFunctionToAString("hello", ::toSentenceCase)
    val result2 = applyFunctionToAString("hello") { it.toUpperCase() }
    println(result)
    println(result2)

    val colors = listOf("red", "green", "blue", "black")

    val upperCasedColors = colors.map { it.toUpperCase() }
    println(upperCasedColors)

    val colorsStartingWithB = colors.filter { it.startsWith("b") }
    println(colorsStartingWithB)

    colors.flatMap { if (it.startsWith("b")) listOf (it, it) else listOf(it) }.forEach{ println(it) }

    println(colors.reduce { result, value -> "$result, $value" })

    val numbers = colors.map { it.length }
    numbers.forEach { println(it) }
    println( numbers.sum())
    println(numbers.average())
    println(numbers.count())

    println(numbers.fold (0) {result, value -> result + value} )
    println(numbers.fold (0) {result, value -> if (value > result) value else result} )

    val myMap = mapOf(1 to "one", 2 to "tow", 3 to "three")
    myMap.filter { (k, v) -> v.startsWith("t") }.forEach { (k, v) -> println ("$k $v") }
}
