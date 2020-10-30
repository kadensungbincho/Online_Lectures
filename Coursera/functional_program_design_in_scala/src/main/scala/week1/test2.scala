package week1

object test2 extends App {
  println("Welcome")

  val f: PartialFunction[String, String] = { case "ping" => "pong"}

  println(f("ping"))
  println(f.isDefinedAt("abc"))

}
