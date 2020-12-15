package manager;

import java.util.ArrayList;
import member.Member;

public class ListManager {

	private ArrayList<Member> memberList;

	public ListManager() {
		memberList = new ArrayList<>();
	}
	
	public void addMember(Member member) {
		memberList.add(member);
	}

	public void deleteMember(Member deleteMember) {
		deleteMemberById(deleteMember.getId());
	}

	public void deleteMemberById(int memberId) {
		for (int i=0; i<memberList.size(); i++) {
			if (memberList.get(i).getId() == memberId) {
				memberList.remove(i);
			}
		}
	}
	
	public void printMembersInfo() {
		for (Member member: memberList) {
			System.out.println(member);
		}
	}

	public ArrayList<Member> getMemberList() {
		return memberList;
	}
}
