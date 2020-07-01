package week02

object answer01 extends App {
  def product(f: Int => Int)(a: Int, b: Int): Int =
    if (a > b) 1
    else f(a) * product(f)(a + 1, b)

  println(product(x => x * x)(3, 4))

  def fact(n: Int) = product(x => x)(1, n)

  println(fact(5))

  def mapReduce(f: Int => Int, combine: (Int, Int) => Int, zero: Int)(a: Int, b: Int): Int =
    if (a > b) zero
    else combine(f(a), mapReduce(f, combine, zero)(a + 1, b))

  def productWithMR(f: Int => Int)(a: Int, b: Int): Int  = mapReduce(f, (x, y) => x * y, 1)(a, b)

  println(productWithMR(x => x * x)(3, 4))
}
