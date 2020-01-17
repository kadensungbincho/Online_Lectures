package com.virtualpairprogrammers.domain;

public class MenuItem {
	private int id;
	private String name;
	private String description;
	private MenuCategory category;
	private double price;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public MenuCategory getCategory() {
		return category;
	}
	public void setCategory(MenuCategory category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public MenuItem(int id, String name, String description, MenuCategory category, double price) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.category = category;
		this.price = price;
	}
	
	public MenuItem() {}
	
	public String toString() {
		return (this.name + " (" + this.price + ")");
	}
	
	
}
