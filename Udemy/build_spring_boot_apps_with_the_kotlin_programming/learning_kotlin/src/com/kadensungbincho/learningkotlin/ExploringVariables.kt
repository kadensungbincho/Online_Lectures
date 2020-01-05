package com.kadensungbincho.learningkotlin

import java.math.BigDecimal
import kotlin.math.roundToInt

fun main(args: Array<String>) {

    val myDouble = 21.4

    println("Is myDouble a Double? ${myDouble is Double}")
    println("myDouble is a ${myDouble::class.qualifiedName}")

    println("myDouble's javaClass is ${myDouble.javaClass}")

    val myInteger = myDouble.roundToInt()
    println("myInteger is a ${myInteger:: class.qualifiedName}")

    val anotherInteger: Int = 17

    val myFloat: Float = 13.6f

    val result = myFloat + anotherInteger
    println(result)

    val bd = BigDecimal(17)

    val bd2: BigDecimal
    println("hello")
    bd2 = bd.add(BigDecimal(30))


    // var is variable that is mutable
    var name = "Kaden Cho"
    // val is value that is immutable
    val surname = "Sungbin"

    name = "Kaden Sungbin Cho"

    // kotlin.io automatically imported
    println("Hello $name $surname")
    println("Your first name has ${name.length} characters")

    val story = """It was a dark and stormy night.
        |A foul smell crept across the city.""".trimMargin()
    println(story)

    printAString("kaden")
}
