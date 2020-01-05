package com.kadensungbincho.learningkotlin

import java.math.BigDecimal
import kotlin.random.Random

fun main(args: Array<String>) {

    var result: Any

    val randomNumber = java.util.Random().nextInt(3)

    if (randomNumber == 1) {
        result = BigDecimal(30)
    } else {
        result = "hello"
    }

    println("Result is currently $result")

    if (result is BigDecimal) {
        result = result.add(BigDecimal(47))
    } else {
        val tempResult = result as String
        result = tempResult.toUpperCase()
    }

    println("Result is currently $result")

}
