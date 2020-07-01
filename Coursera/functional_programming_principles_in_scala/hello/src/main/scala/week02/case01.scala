package week02

object case01 extends App {
  def sum(f: Int => Int): (Int, Int) => Int = {
    def sumF(a: Int, b: Int): Int =
      if (a > b) 0
      else f(a) + sumF(a + 1, b)

    sumF
  }

  def sumInts = sum(x => x)
  def sumCubes = sum(x => x * x * x)

//  println(sum(x => x * x * x)(1, 10))

  /* This style of definition and function application is called
    currying named for its instigator, Haskell Brooks Curry, a twentieth century logician.

    In fact, the idea goes back even further sto Shonfinkel and Frege, but  the
    term currying has stuck.
   */

  def product(f: Int => Int): (Int, Int) => Int = {
    def productF(a: Int, b: Int): Int =
      if (a > b) 1
      else f(a) * productF(a + 1, b)

    productF
  }

//  println(product(x => x)(1, 10))
}
