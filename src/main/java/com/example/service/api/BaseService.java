package com.example.service.api;

import com.example.common.entity.BaseEntity;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
public interface BaseService <D extends BaseEntity> {
    D getById(Long id);

    D save(D dto);

    void delete(D dto);

    void delete(Long id);

    List<D> findAll();

    Long size();
}
