package com.example.service.impl;

import com.example.common.entity.Achieve;
import com.example.common.entity.User;
import com.example.dao.api.AchieveDao;
import com.example.service.api.AchieveService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class AchieveServiceImpl extends BaseServiceImpl<Achieve, AchieveDao> implements AchieveService {
    @Override
    public List<Achieve> findByUser(User user) {
        return findByUser(user);
    }
}
