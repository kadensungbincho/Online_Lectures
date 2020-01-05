package com.kadensungbincho

import java.util.*

data class KotlinPerson (val id: Long,
                    val title: String,
                    val firstName: String,
                    val surName: String,
                    val dataOfBirth: Calendar?) {

    var favoriteColor: String? = null

    fun getLastLetter(a: String) = a.takeLast(1)

    fun getUpperCaseColor(): String {
        return favoriteColor!!.toUpperCase()
//        return favoriteColor?.toUpperCase() ?: ""
    }

    fun getLastLetterOfColor(): String {
//        return if(favoriteColor == null) "" else getLastLetter(favoriteColor)
        return favoriteColor?.let{ getLastLetter(it) } ?: ""
    }

    fun getColorType(): String {
        val color = getUpperCaseColor()
//        return if (color == "")
//            "empty"
//        else if (color == "RED" || color == "BLUE" || color == "Green")
//            "rgb"
//        else
//            "other"
        return when (color) {
            "" -> "empty"
            "RED", "GREEN", "BLUE" -> "rgb"
            else -> "other"
        }
    }

    override fun toString() = "$title $firstName $surName"

    val safeAge: Int
        get() {
//            val localAge = age
//            return if(localAge != null) localAge else -1
            // return if (age != null) age!! else -1
            return age ?: -1
        }

    val age: Int?
        get() = getAge(dataOfBirth)

    companion object {
        fun getAge(dataOfBirth: Calendar?): Int? {
            if (dataOfBirth == null) return null
            val today = GregorianCalendar()
            val years = today.get(Calendar.YEAR) - dataOfBirth.get(Calendar.YEAR)

            return if(dataOfBirth.get(Calendar.DAY_OF_YEAR) >= today.get(Calendar.YEAR)) years - 1 else years
        }
    }
}

fun main(args: Array<String>) {
    val person = KotlinPerson(1L, "Data Engineer", "Kaden", "Cho", GregorianCalendar(1990, 7, 20))
    val person2 = KotlinPerson(2L, "Data Engineer", "kaden", "Cho", null)
    println(person.age)
    println(person2.age)
    println(person.safeAge)

}
