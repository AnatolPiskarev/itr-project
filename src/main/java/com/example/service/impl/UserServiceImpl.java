package com.example.service.impl;


import com.example.common.entity.User;
import com.example.dao.api.UserDao;
import com.example.service.api.UserService;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl extends BaseServiceImpl<User, UserDao> implements UserService {

    public User getByEmail(final String email) {
        return dao.findByEmail(email);
    }

    public User getByPseudonym(final String pseudonym) {
        return dao.findByPseudonym(pseudonym);
    }

    public void banUser(final Long id) {
        User user = dao.findOne(id);
        user.setActive(false);
        user = dao.save(user);
    }

    public void unbanUser(final Long id) {
        User user = dao.findOne(id);
        user.setActive(true);
        user = dao.save(user);
    }
}
