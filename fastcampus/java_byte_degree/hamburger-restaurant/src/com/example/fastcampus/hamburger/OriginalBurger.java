package com.example.fastcampus.hamburger;

public class OriginalBurger implements Hamburger {
	private int price = 1000;
	private String ingredient = "Ham";

	@Override
	public int getPrice() { return price; }

	@Override
	public String getIngredient() { return ingredient; }
}
