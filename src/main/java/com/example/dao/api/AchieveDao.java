package com.example.dao.api;

import com.example.common.entity.Achieve;
import com.example.common.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 10.06.16.
 */
@Transactional
public interface AchieveDao extends BaseDao<Achieve>  {
    List<Achieve> findByUser(User user);
}
