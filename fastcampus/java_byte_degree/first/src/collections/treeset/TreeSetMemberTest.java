package collections.treeset;

public class TreeSetMemberTest {

	public static void main(String[] args) {

		MemberTreeSet manager = new MemberTreeSet();
		
		Member memberLee = new Member(100, "Lee");
		Member memberKim = new Member(300, "Kim");
		Member memberCho = new Member(200, "Cho");
		
		manager.addMember(memberLee);
		manager.addMember(memberKim);
		manager.addMember(memberCho);
		
		manager.showAllMember();
		
		manager.removeMember(100);
		
		manager.showAllMember();
	}


}
