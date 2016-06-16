package com.example.service.impl;

import com.example.common.entity.BaseEntity;
import com.example.dao.api.BaseDao;
import com.example.service.api.BaseService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
public abstract class BaseServiceImpl<DTO extends BaseEntity, DAO extends BaseDao<DTO>> implements BaseService<DTO> {

    @Autowired
    protected DAO dao;

    @Override
    public DTO getById(final Long id) {
        return dao.findOne(id);
    }

    @Override
    public DTO save(final DTO dto) {
        return dao.save(dto);
    }

    @Override
    public void delete(final DTO dto) {
        dao.delete(dto.getId());
    }

    @Override
    public void delete(final Long id) {
        dao.delete(id);
    }

    @Override
    public List<DTO> findAll() {
        return (List) dao.findAll();
    }

    @Override
    public Long size() {
        return dao.count();
    }
}


