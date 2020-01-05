package com.kadensungbincho.learningkotlin

fun printAString(value: String) = println(value)

fun addTwoNumbers(one: Double, two: Double = 3.9) = one + two

fun printMaths(one: Double, two: Double) {
    println("one + two is ${one + two}")

    fun funcInFunc(a: String) {
        println(a)
    }
    funcInFunc("funcInFunc")
}

//fun methodTakesLambda(input: String, action: java.util.function.Function<String, Int>) {
//    println(action.apply(input))
//}

fun methodTakesLambda(input: String, action: (String) -> Int) {
    println(action(input))
}

fun main(args: Array<String>) {
    printAString("Hello World")
    println(addTwoNumbers(1.2, 3.0))
    println(addTwoNumbers(1.2))
}
