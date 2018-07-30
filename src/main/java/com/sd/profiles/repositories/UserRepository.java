package com.sd.profiles.repositories;

import com.sd.profiles.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserById(Long id);
    User findByName(String name);
    Long removeById(long id);
    List<User> findBySkillsContaining(String skill);
}
