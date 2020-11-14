package com.example.fastcampus.hamburger;

public class BulgogiBurger implements Hamburger {
	private int price = 2000;
	private String ingredient = "Bulgogi";

	@Override
	public int getPrice() { return price; }

	@Override
	public String getIngredient() { return ingredient; }
}
