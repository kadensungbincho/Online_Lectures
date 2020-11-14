package com.example.fastcampus.machin;

import java.util.ArrayList;
import java.util.List;

import com.example.fastcampus.hamburger.Hamburger;

public class HamburgerOrderMachine {
	private List<Hamburger> hamburgerList;

	public HamburgerOrderMachine() {
		hamburgerList = new ArrayList<>();
	}

	public void order(Hamburger hamburger) {
		hamburgerList.add(hamburger);
	}

	public int completeOrder() {
		int totalPrice = 0;

		for (Hamburger hamburger: hamburgerList) {
			System.out.println("Ingredient: " + hamburger.getIngredient());
			totalPrice += hamburger.getPrice();
		}
		return totalPrice;
	}

}
