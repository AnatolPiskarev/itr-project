package com.example.service.api;

import com.example.common.entity.Achieve;
import com.example.common.entity.User;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
public interface AchieveService extends BaseService<Achieve> {
    List<Achieve> findByUser(User user);
}
