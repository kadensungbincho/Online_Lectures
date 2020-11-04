package collections.treeset;

import java.util.Comparator;

public class Member implements Comparator<Member> { 
	
	private int memberId;
	private String memberName;
	
	public Member() {}
	public Member(int memberId, String memberName) {
		this.memberId = memberId;
		this.memberName = memberName;
	}
	
	public int getMemberId() {
		return memberId;
	}
	
	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	
	public String toString() {
		return memberName + "'s id is " + memberId;
	}
	
	@Override
	public int hashCode() {
		return memberId;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (obj instanceof Member) {
			Member member = (Member)obj;
			return (this.memberId == member.memberId);
		}
		return false;
	}
	
//	@Override
//	public int compareTo(Member member) {
//		return (this.memberId - member.memberId);
//	}

	@Override
	public int compare(Member o1, Member o2) {
		return o1.memberId - o2.memberId;
	}
	
}
