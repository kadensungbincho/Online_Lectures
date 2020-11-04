package collections.set;

public class HashSetMemberTest {

	public static void main(String[] args) {

		MemberHashSet manager = new MemberHashSet();
		
		Member memberLee = new Member(100, "Lee");
		Member memberKim = new Member(200, "Kim");
		Member memberCho = new Member(300, "Cho");
		Member memberCho2 = new Member(300, "Cho2");
		
		manager.addMember(memberLee);
		manager.addMember(memberKim);
		manager.addMember(memberCho);
		manager.addMember(memberCho2);
		
		manager.showAllMember();
		
		manager.removeMember(100);
		
		manager.showAllMember();
	}


}
