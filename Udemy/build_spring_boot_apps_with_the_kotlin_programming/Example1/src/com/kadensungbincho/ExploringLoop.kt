package com.kadensungbincho

fun main(args: Array<String>) {
//    var x: Int = 0
//    while(x < 10) {
//        println(x)
//        x++
//    }
//    val people = ArrayList<KotlinPerson>()
    val people = HashMap<Int, KotlinPerson>()
    people.put(1, KotlinPerson(1, "Wr", "James", "Angle", null))
    people.put(2, KotlinPerson(2, "Miss", "Sophie", "Orange", null))
    people.put(3, KotlinPerson(3, "Mrs", "Anie", "Orange", null))

//    for((id, title, firstName) in people) {
//        println("$id $title $firstName")
//    }
    for((key, value) in people) {
        println("$key $value")
    }

//    val myRange = 0..9
    for(i in 0..9) {
        println(i)
    }
    (0..9).forEach{ println(it)}

    for(i in 9 downTo 0) {
        println(i)
    }
    (9 downTo 0).forEach{ println(it) }
    (0 until 9).forEach{ println(it) }
    (0..9 step 2).forEach{ println(it) }
    ('A'..'F').forEach{ println(it) }
}
