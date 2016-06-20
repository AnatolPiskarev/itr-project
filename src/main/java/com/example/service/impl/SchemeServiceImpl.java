package com.example.service.impl;

import com.example.common.entity.Scheme;
import com.example.dao.api.SchemeDao;
import com.example.dao.api.SchemeRatingDao;
import com.example.service.api.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class SchemeServiceImpl extends BaseServiceImpl<Scheme, SchemeDao> implements SchemeService {
    @Autowired
    private SchemeRatingDao schemeRatingDao;

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

    @Override
    public List<Scheme> getTop(int index, int count) {
        Pageable pageable = new PageRequest(index, count);
        List<Scheme> schemes = schemeRatingDao.getTopSchemes(pageable).stream()
                .map(object -> (Scheme) object[0]).collect(Collectors.toList());
        return schemes;
    }
}
