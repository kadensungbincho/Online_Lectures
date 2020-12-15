package member;

public class VIPMember extends Member {

	private int privateAgentId;
	
	public VIPMember() {
		super();
		family = Family.VIP;
	}
	
	public VIPMember(int memberId, String memberName, int agentId) {
		id = memberId;
		name = memberName;
		privateAgentId = agentId;
	}

	public int getPrivateAgentId() {
		return privateAgentId;
	}

	public void setPrivateAgentId(int privateAgentId) {
		this.privateAgentId = privateAgentId;
	}

	@Override
	public String toString() {
		return "VIPMember{" +
				"privateAgentId=" + privateAgentId +
				", id=" + id +
				", name='" + name + '\'' +
				", family=" + family +
				'}';
	}
}



