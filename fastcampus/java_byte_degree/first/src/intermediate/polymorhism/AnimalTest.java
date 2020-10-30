package intermediate.polymorhism;

import java.util.ArrayList;

class Animal {
	public void move() {
		System.out.println("The animal is moving!");
	}
}

class Human extends Animal {
	
	public void move() {
		System.out.println("The human is moving!");
	}
}

class Tiger extends Animal {
	
	public void move() {
		System.out.println("The tiger is moving!");
	}
}

class Eagle extends Animal {
	public void move() {
		System.out.println("The eagle is moving!");
	}
}

public class AnimalTest {
	
	public static void main(String[] args) {
		Animal hAnimal = new Human();
		Animal tAnimal = new Tiger();
		Animal eAnimal = new Eagle();
		
//		AnimalTest test = new AnimalTest();
//		test.moveAnimal(hAnimal);
//		test.moveAnimal(tAnimal);
//		test.moveAnimal(eAnimal);
		
		ArrayList<Animal> animalList = new ArrayList<>();
		animalList.add(hAnimal);
		animalList.add(tAnimal);
		animalList.add(eAnimal);
		
		for (Animal animal: animalList) {
			animal.move();
		}
	}
	
	public void moveAnimal(Animal animal) {
		animal.move();
	}
}