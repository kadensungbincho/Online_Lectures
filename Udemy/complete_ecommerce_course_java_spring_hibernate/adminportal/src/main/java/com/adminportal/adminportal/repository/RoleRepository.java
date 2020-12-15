package com.adminportal.adminportal.repository;

import com.adminportal.adminportal.domain.security.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {

}
