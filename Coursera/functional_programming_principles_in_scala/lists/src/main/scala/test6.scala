object test6 extends App {
  val xs = Array(1, 2, 3, 44)
  xs map (x => x * 2)

  val s = "Hello World"
  s filter (c => c.isUpper)

  s exists (c => c.isUpper)
  s forall (c => c.isUpper)

  val pairs = List(1, 2, 3) zip s
  println(pairs.unzip)

  s flatMap (c => List('.', c))

}
