package week1

object test1 extends App {
  println("Welcome to the Scala worksheet")

  val f: String => String = { case "ping" => "pong"}

  println(f("ping"))
  // raise MatchError
  // println(f("abc"))

  val pf: PartialFunction[String, String] = { case "ping" => "pong"}
  println(pf.isDefinedAt("ping"))
  println(pf.isDefinedAt("pong"))



}
