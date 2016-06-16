package com.example.dao.api;

import com.example.common.entity.User;

import javax.transaction.Transactional;

@Transactional
public interface UserDao extends BaseDao<User> {

    User findByEmail(String email);

    User findByPseudonym(String pseudonym);

}
