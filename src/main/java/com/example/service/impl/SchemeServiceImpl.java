package com.example.service.impl;

import com.example.common.entity.Scheme;
import com.example.dao.api.SchemeDao;
import com.example.service.api.SchemeService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class SchemeServiceImpl extends BaseServiceImpl<Scheme, SchemeDao> implements SchemeService {

    @Override
    public List<Scheme> getByUserId(Long userId) {
        return dao.findByUserId(userId);
    }

    @Override
    public List<Scheme> getByCategory(String category) {
        return dao.findByCategory(category);
    }

    @Override
    public List<Scheme> getLasts(int limit) {
        return dao.getLasts(limit);
    }
}
