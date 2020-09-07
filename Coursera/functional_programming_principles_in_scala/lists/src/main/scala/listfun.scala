object listfun extends App {
  val nums = List(2, -4, 5, 7, 1)
  val fruits = List("apple", "pineapple", "orange", "banana")

  println(nums filter (x => x > 0))
  println(nums partition (x => x > 0))

  println(nums takeWhile (x => x > 0))

  val data = List("a", "a", "a", "b", "c", "c", "a")

  def pack[T](xs: List[T]): List[List[T]] = xs match {
    case Nil => Nil
    case x :: xs1 =>
      val (first, rest) = xs span(y => y == x)
      first :: pack(rest)
  }

  println(pack(data))

  def encode[T](xs: List[T]): List[(T, Int)] =
    pack(xs) map (ys => (ys.head, ys.length))

  println(encode(data))

  def concat[T](xs: List[T], ys: List[T]): List[T] =
    (xs foldRight ys)(_ :: _)
}
