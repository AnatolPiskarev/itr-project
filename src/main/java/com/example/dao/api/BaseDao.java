package com.example.dao.api;

import com.example.common.entity.BaseEntity;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Anatol on 15.06.16.
 */
public interface BaseDao<D extends BaseEntity> extends CrudRepository<D, Long> {
}
