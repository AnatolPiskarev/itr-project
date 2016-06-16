package com.example;

import com.example.common.Role;
import com.example.common.entity.User;
import com.example.dao.api.UserDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class UserDaoCreationTest extends SchemeApplicationTests {

    @Autowired
    private UserDao userDao;

    @Before
    public void before() {
        createFakeData();
    }

    @Test
    public void getAllTest() {
        List<User> users = (List<User>) userDao.findAll();
        assertEquals(users.get(0).getPseudonym(), "Onotole");

    }
    @Test
    public  void getByEmailTest() {
        User user= userDao.findByEmail("tirionlannister1993@gmail.com");
        assertEquals(user.getPseudonym(),"Onotole");
    }

    @Test
    public  void getByPseudonymTest() {
        User user= userDao.findByPseudonym("Onotole");
        assertEquals(user.getEmail(), "tirionlannister1993@gmail.com");

    }



}
