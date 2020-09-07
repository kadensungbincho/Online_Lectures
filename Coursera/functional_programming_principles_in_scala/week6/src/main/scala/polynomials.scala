object polynomials1 extends App {

  class Poly(val terms0: Map[Int, Double]) {
    def this(bindings: (Int, Double)*) = this(bindings.toMap)
    val terms = terms0 withDefaultValue( 0.0)

    def + (other: Poly) = new Poly((other.terms foldLeft terms)(addTerm))
    def addTerm(terms: Map[Int, Double], term: (Int, Double)): Map[Int, Double] = {
      val (exp, coeff) = term
      terms + (exp -> (coeff + terms(exp)))
    }

    override def toString: String =
      (for ((exp, coeff) <- terms.toList.sorted.reverse) yield coeff+"x^"+exp) mkString " + "
  }

  val p1 = new Poly(1 -> 2.0, 3 -> 4.0, 5 -> 6.2)
  val p2 = new Poly(0 -> 3.0, 3 -> 7.0)
  println(p1 + p2)
  println(p1.terms(7))

}
