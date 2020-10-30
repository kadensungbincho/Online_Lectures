package week1

object generators  extends App {
  println("Welcome")

  val integers = new Generator[Int] {
    def generate = scala.util.Random.nextInt()

    val booleans = integers.map(_ >= 0)
  }

  def leafs: Generator[Leaf] = for {
    x <- integers
  } yield Leaf(x)

  def inners: Generator[Inner] = for {
    l <- trees
    r <- trees
  } yield Inner(l, r)

  def trees: Generator[Tree] = for {
    isLeaf <- booleans
    tree <- if (isLeaf) leafs else inners
  } yield tree

}
