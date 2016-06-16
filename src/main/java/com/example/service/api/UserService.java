package com.example.service.api;

import com.example.common.entity.User;


public interface UserService extends BaseService<User> {

    User getByEmail(String email);

    User getByPseudonym(String pseudonym);

    void banUser(Long id);

    void unbanUser(Long id);
}
