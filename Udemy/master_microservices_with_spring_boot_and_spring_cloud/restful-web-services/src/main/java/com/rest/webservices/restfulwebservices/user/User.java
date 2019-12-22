package com.rest.webservices.restfulwebservices.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

@ApiModel(description="All details about the user.")
@Entity
public class User {

	@Id
	@GeneratedValue
	private Integer id;
	
	@Size(min=2, message="Name should have at least 2 characters")
	@ApiModelProperty(notes="Name should have at least 2 characters")
	private String name;
	
	@Past
	@ApiModelProperty(notes="Birth date should be in the past")
	private Date birthDate;

	@OneToMany(mappedBy = "user")
	private List<Post> posts;

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	protected User() {
		
	}

	public User(Integer id, String name, Date date) {
		super();
		this.id = id;
		this.name = name;
		this.birthDate = date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	
	
}
