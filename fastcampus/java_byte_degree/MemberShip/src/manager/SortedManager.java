package manager;

import java.util.TreeSet;

import member.Member;

public class SortedManager {

	private TreeSet<Member> memberSet;
	
	
	public SortedManager() {
		memberSet = new TreeSet<>();
	}

	public void addMember(Member member) {
		memberSet.add(member);
	}
	
	public void deleteMember(Member member) {
		memberSet.remove(member);
	}
	
	public void printMembersInfo() {
		for (Member member: memberSet) {
			System.out.println(member);
		}
	}

	public TreeSet<Member> getMemberSet() {
		return memberSet;
	}
}
