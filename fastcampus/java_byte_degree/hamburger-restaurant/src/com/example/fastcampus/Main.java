package com.example.fastcampus;

import com.example.fastcampus.hamburger.BulgogiBurger;
import com.example.fastcampus.hamburger.CheeseBurger;
import com.example.fastcampus.hamburger.ChickenBurger;
import com.example.fastcampus.hamburger.OriginalBurger;
import com.example.fastcampus.machin.HamburgerOrderMachine;

public class Main {
	public static void main(String[] args) {
		
		//과제 상세
		HamburgerOrderMachine hamburgerOrderMachine1 = new HamburgerOrderMachine();
		hamburgerOrderMachine1.order(new BulgogiBurger());
		hamburgerOrderMachine1.order(new CheeseBurger());
		int totalPrice1 = hamburgerOrderMachine1.completeOrder();
		System.out.println("첫 번쨰 주문은 " + totalPrice1 + "원 입니다");

		System.out.println();

		//과제상세
		HamburgerOrderMachine hamburgerOrderMachine2 = new HamburgerOrderMachine();
		hamburgerOrderMachine2.order(new OriginalBurger());
		hamburgerOrderMachine2.order(new ChickenBurger());
		hamburgerOrderMachine2.order(new ChickenBurger());
		int totalPrice2 = hamburgerOrderMachine2.completeOrder();
		System.out.println("두 번째 주문은 " + totalPrice2 + "원 입니다.");
	}
}
