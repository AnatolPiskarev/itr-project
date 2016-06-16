package com.example;

import com.example.common.entity.Achieve;
import com.example.common.Title;
import com.example.common.entity.User;
import com.example.dao.api.AchieveDao;
import com.example.dao.api.UserDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * Created by Anatol on 11.06.16.
 */
public class AchieveDaoCreationTest extends SchemeApplicationTests {
    @Autowired
    private AchieveDao achieveDao;
    @Autowired
    private UserDao userDao;
    private Achieve achieve;
    private User user;

    @Before
    public void Before() {
        createFakeData();
        user = userDao.findByEmail("tirionlannister1993@gmail.com");
        achieve = new Achieve();
        achieve.setUser(user);
        achieve = achieveDao.save(achieve);
        achieve.setTitle(Title.ACHIEVE_BADASS);
        achieve = achieveDao.save(achieve);
    }
    @Test
    public void getByUserIdTest() {
        Achieve savedAchieve = achieveDao.findByUser(user).get(0);
        assertEquals(savedAchieve.getTitle(),achieve.getTitle());
    }
    @Test
    public void findAllTest() {
        assertEquals(((List<Achieve>) achieveDao.findAll()).size(), 1);
    }
}
