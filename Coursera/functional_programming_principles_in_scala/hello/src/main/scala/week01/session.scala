package week01

object session extends App {
//  println(1+2)
  def abs(x: Double) = if (x < 0) -x else x

  def sqrt(x: Double) = {
    def sqrtIter(guess: Double): Double =
      if (isGoodEnough(guess)) guess
      else sqrtIter(improve(guess))

    def isGoodEnough(guess: Double) =
      abs(guess * guess - x) / x < 0.001

    def improve(guess: Double) =
      (guess + x / guess) / 2

    sqrtIter(1.0)
  }
  println(sqrt(2))
  println(sqrt(4))
  // problem 1: small num
  println(sqrt(1e-6))
  // problem 2: large num -> non termination
  println(sqrt(1e60))
}
