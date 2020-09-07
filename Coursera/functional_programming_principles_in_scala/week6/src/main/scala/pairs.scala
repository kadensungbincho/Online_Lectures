object pairs extends App {
  def isPrime(n: Int) = (2 until n) forall (n % _ != 0)

  val n = 7

  println(
    (1 until n) flatMap (i =>
      (1 until i) map (j => (i, j))) filter (pair =>
        isPrime(pair._1 + pair._2))
  )
}
