package com.sd.profiles.service;

import java.util.*;
import com.sd.profiles.repositories.UserRepository;
import com.sd.profiles.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	@Override
	public User findById(Long id) {
		return userRepository.findUserById(id);
	}
	@Override
	public User findByName(String name) {
		return userRepository.findByName(name);
	}
	@Override
	public void saveUser(User user) {
		userRepository.save(user);
	}
	@Override
	public void updateUser(User user){
		saveUser(user);
	}
	@Override
	public void deleteUserById(Long id){
		userRepository.removeById(id);
	}
	@Override
	public void deleteAllUsers(){
		userRepository.deleteAll();
	}
	@Override
	public List<User> findAllUsers(){
		return userRepository.findAll();
	}
	@Override
	public boolean isUserExist(User user) {
		return findByName(user.getName()) != null;
	}
	@Override
	public List<User> findBySkills(String skills){
		List<User> usersLst = new ArrayList<>();
		Set<User> users = new HashSet<>();
		for(String str: skills.split(",")){
			users.addAll(userRepository.findBySkillsContaining(org.apache.commons.lang3.StringUtils.trim(str)));
		}
		usersLst.addAll(users);
		return usersLst;
	}
}
