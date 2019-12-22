package com.rest.webservices.restfulwebservices.user;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

@RestController
public class UserResource {
	
	@Autowired
	private UserDaoService service;
	
	@GetMapping("/users")
	public List<User> retrieveAllUsers() {
		return service.findAll();
	}
	
	@GetMapping("/users/{id}")
	public Resource<User> retrieveUser(@PathVariable int id) {
		User user = service.findOne(id);
		
		if(user == null) throw new UserNotFoundException("id-" + id);
		Resource<User> entityModel = new Resource<>(user);

		ControllerLinkBuilder linkTo = linkTo(methodOn(this.getClass()).retrieveAllUsers());
		entityModel.add(linkTo.withRel("all-users"));
		return entityModel;
	}
	
	@PostMapping("/users")
	public ResponseEntity<Object> createUser(@Valid @RequestBody User user) {
		User savedUser = service.save(user);
		
		URI location = ServletUriComponentsBuilder
			.fromCurrentRequest()
			.path("/{id}")
			.buildAndExpand(savedUser.getId()).toUri();
		
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable int id) {
		User user = service.deleteById(id);
		
		if(user == null) throw new UserNotFoundException("id-" + id);
		
	}

}
