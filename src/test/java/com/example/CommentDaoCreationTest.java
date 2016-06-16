package com.example;

import com.example.common.entity.Comment;
import com.example.common.entity.Scheme;
import com.example.common.entity.User;
import com.example.dao.api.CommentDao;
import com.example.dao.api.SchemeDao;
import com.example.dao.api.UserDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by Anatol on 11.06.16.
 */
public class CommentDaoCreationTest extends  SchemeApplicationTests {
    @Autowired
    private CommentDao commentDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private SchemeDao schemeDao;
    private Comment comment;
    private User user;
    private Scheme scheme;

    @Before
    public void Before() {
        createFakeData();
        user = userDao.findByEmail("tirionlannister1993@gmail.com");
        scheme = schemeDao.findByUserId(user.getId()).get(0);
    }

    @Test
    public void getCommentTest() {
        comment = commentDao.findBySchemeId(scheme.getId()).get(0);
        assertEquals(comment.getCommentary(), commentDao.findByUserId(user.getId()).get(0).getCommentary());
        assertNotNull(comment.getLikes());
    }

}
