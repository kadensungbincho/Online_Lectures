package test;

import java.util.List;

import manager.*;
import member.Member;
import member.VIPMember;

public class MemberShipTest {

	public static void main(String[] args) {
	
		Member memberKim = new Member(1001, "Kim");
		Member memberLee = new Member(1002, "Lee");
		Member memberSong = new Member(1003, "Song");
		
		VIPMember memberPark = new VIPMember(1004, "Park", 123);
		VIPMember memberSeo = new VIPMember(1005, "Seo", 456);
		VIPMember memberHan = new VIPMember(1006, "Han", 789);
		
		// ListManager 에 모든 고객을 관리
		ListManager listManager = new ListManager();
		listManager.addMember(memberKim);
		listManager.addMember(memberLee);
		listManager.addMember(memberSong);
		listManager.addMember(memberPark);
		listManager.addMember(memberSeo);
		listManager.addMember(memberHan);

		
		// 모든 고객의 정보를 출력

		listManager.printMembersInfo();
		System.out.println("==========================================================");
		System.out.println();
			
		List<Member> list = listManager.getMemberList();
		BasicSalesRatio basicSalesRatio = new BasicSalesRatio();
		VIPSalesRatio vipSalesRatio = new VIPSalesRatio();

		System.out.println("100000 만원 짜리 물건을 살때 Member 와 VIPMember 의 가격을 출력하기");
		int price1 = 100000;
		basicSalesRatio.printSalesReport(price1);
		vipSalesRatio.printSalesReport(price1);
		System.out.println("==========================================================");
		System.out.println();

	    System.out.println("250000 만원 짜리 물건을 살때 Member 와 VIPMember 의 가격을 출력하기");
	    int price2 = 250000;
		basicSalesRatio.printSalesReport(price2);
		vipSalesRatio.printSalesReport(price2);
		System.out.println("==========================================================");
		System.out.println();

		
		// 모든 멤버를 이름 순으로 출력하세요
		System.out.println("모든 멤버를 이름순으로 출력하세요");
		SortedManager sortedManager = new SortedManager();
		sortedManager.addMember(memberKim);
		sortedManager.addMember(memberLee);
		sortedManager.addMember(memberSong);
		sortedManager.addMember(memberPark);
		sortedManager.addMember(memberSeo);
		sortedManager.addMember(memberHan);
		sortedManager.printMembersInfo();

		
	}
}
