object polynomials extends App {
  class Poly(val terms: Map[Int, Double]) {
    def + (other: Poly) = new Poly(terms ++ other.terms)
    override def toString =
      (for ((exp, coeff) <- terms.toList.sorted.reverse) yield coeff + "x^"+exp) mkString " + "
  }

  val p1 = new Poly(Map(1 -> 2.0, 3 -> 4.0, 5 -> 6.2))
  val p2 = new Poly(Map(0 -> 3.0, 3 -> 7.0))
  println(p1 + p2)
}
