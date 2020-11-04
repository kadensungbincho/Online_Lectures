package collections.set;

import java.util.HashSet;
import java.util.Iterator;

public class MemberHashSet {
	
	private HashSet<Member> hashset;
	
	public MemberHashSet() {
		hashset = new HashSet<Member>();
	}
	
	public void addMember(Member member) {
		hashset.add(member);
	}
	
	public boolean removeMember(int memberId) {
		Iterator<Member> ir = hashset.iterator();
		
		while(ir.hasNext()) {
			Member member = ir.next();
			if(member.getMemberId() == memberId) {
				hashset.remove(member);
				return true;
			}
		}
		return false;
	}
	
	public void showAllMember() {
		for (Member member : hashset) {
			System.out.println(member);
		}
		System.out.println();
	}
}
