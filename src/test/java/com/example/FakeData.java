package com.example;

import com.example.common.Role;
import com.example.common.entity.Scheme;
import com.example.common.entity.User;
import com.example.dao.api.SchemeDao;
import com.example.dao.api.UserDao;
import com.example.service.api.UserService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by ugncry on 04.07.2016.
 */
public class FakeData {

    @Autowired
    private UserDao userDao;

    @Autowired
    private SchemeDao schemeDao;

    public void createFakeData() {
//        User user = new User();
//        user.setActive(Boolean.TRUE);
//        user.setFacebookId(111L);
//        user.setFullName("Petr");
//        user.setRole(Role.ROLE_ADMIN);
//        userDao.save(user);
//
//        User user1 = new User();
//        user1.setActive(Boolean.TRUE);
//        user1.setFacebookId(222L);
//        user1.setFullName("Vasya");
//        user1.setRole(Role.ROLE_ADMIN);
//        user1 = userDao.save(user1);
//
//        User user2 = new User();
//        user2.setActive(Boolean.TRUE);
//        user2.setFacebookId(333L);
//        user2.setFullName("Sereja");
//        user2.setRole(Role.ROLE_ADMIN);
//        user2 = userDao.save(user2);
//
//        Scheme scheme = new Scheme();
//        scheme.setName("Popka");
//        scheme.setDescription("Rak");
//        scheme.setCategory("Ruberoid");
//        scheme.setUser(user);
//        scheme.setCreationDate(1L);
//        scheme = schemeDao.save(scheme);
//
//        Scheme scheme1 = new Scheme();
//        scheme1.setName("PIZDASUKA");
//        scheme1.setDescription("1:25");
//        scheme1.setCategory("Anshlag");
//        scheme1.setUser(user1);
//        scheme1.setCreationDate(2L);
//        scheme1 = schemeDao.save(scheme1);
//
//        Scheme scheme2 = new Scheme();
//        scheme2.setName("Misinetz");
//        scheme2.setDescription("Popularnij anekdot");
//        scheme2.setCategory("Anshlag");
//        scheme2.setUser(user2);
//        scheme2.setCreationDate(3L);
//        scheme2 = schemeDao.save(scheme2);

    }

}
