package member;

public class Member implements Comparable<Member> {
	protected int id;
	protected String name;
	protected Family family;
	
	public Member() {
		family = Family.FAMILY;
	}
	
	public Member(int memberId, String memberName) {
		id = memberId;
		name = memberName;
	}

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

	public Family getFamily() {
		return family;
	}

	public void setFamily(Family family) {
		this.family = family;
	}

	@Override
	public String toString() {
		return "Member{" +
				"id=" + id +
				", name='" + name + '\'' +
				", family=" + family +
				'}';
	}

	@Override
	public int compareTo(Member o) {
		return name.compareTo(o.getName());
	}
}
