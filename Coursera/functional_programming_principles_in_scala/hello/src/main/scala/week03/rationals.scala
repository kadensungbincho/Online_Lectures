package week03

object rationals extends App {
  val x = new Rational(1, 2)
  val y = new Rational(5, 7)
  val z = new Rational(3, 2)

  println(x.numer)
  println(x.denom)

  println(x.add(y))

  println(x.sub(y).sub(z))

  println(x.less(y))

  println(x.max(y))

  val strange = new Rational(1, 1)
  strange.add(strange)

  new Rational(2)
}

class Rational(x: Int, y: Int) {
  // require is a predefined function
  // It takes a condition and an optional message string.
  require(y != 0, "denominator must be non-zero")

  def this(x: Int) = this(x, 1)

  private def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)

  def numer = x
  def denom = y

  def less(that: Rational) = numer * that.denom < that.numer * denom

  def max(that: Rational) = if (this.less(that)) that else this

  def add(that: Rational) =
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom)

  def neg: Rational = new Rational(-numer, denom)

  def sub(that: Rational) = add(that.neg)

  override def toString = {
    val g = gcd(numer, denom)
    numer/g + " / " + denom/g
  }

  // This ability to choose different implementations of the data
  // without affecting clients called data abstraction
}
