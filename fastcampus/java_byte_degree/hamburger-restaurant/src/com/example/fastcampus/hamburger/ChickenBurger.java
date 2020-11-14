package com.example.fastcampus.hamburger;

public class ChickenBurger implements Hamburger {
	private int price = 2000;
	private String ingredient = "Chicken";

	@Override
	public int getPrice() { return price; }

	@Override
	public String getIngredient() { return ingredient; }
}
