package week01

object session extends App {
//  println(1+2)
  def abs(x: Double) = if (x < 0) -x else x

  def sqrtIter(guess: Double, x: Double): Double =
    if (isGoodEnough(guess, x)) guess
    else sqrtIter(improve(guess, x), x)

  def isGoodEnough(guess: Double, x: Double) =
    abs(guess * guess - x) < 0.001

  def improve(guess: Double, x: Double) =
    (guess + x / guess) / 2

  def sqrt(x: Double) = sqrtIter(1.0, x)

  println(sqrt(2))
  println(sqrt(4))
  // problem 1: small num
  println(sqrt(1e-6))
  // problem 2: large num -> non termination
  println(sqrt(1e60))
}
