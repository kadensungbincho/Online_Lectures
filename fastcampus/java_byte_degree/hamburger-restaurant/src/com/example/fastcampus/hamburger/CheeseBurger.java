package com.example.fastcampus.hamburger;

public class CheeseBurger implements Hamburger {
	private int price = 1500;
	private String ingredient = "Cheese";

	@Override
	public int getPrice() { return price; }

	@Override
	public String getIngredient() { return ingredient; }
}
