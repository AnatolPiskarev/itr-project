package com.example.service.impl;

import com.example.common.entity.*;
import com.example.dao.api.SchemeDao;
import com.example.dao.api.SchemeRatingDao;
import com.example.service.api.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class SchemeServiceImpl extends BaseServiceImpl<Scheme, SchemeDao> implements SchemeService {
    @Autowired
    private SchemeRatingDao schemeRatingDao;
    @Autowired
    private SchemeDao schemeDao;

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

    @Override
    public Scheme save(Scheme scheme) {
        scheme.setCreationDate(new Date().getTime());
        if (scheme.getId()==null) {
        scheme = generateSchemeId(scheme);
        }
        return schemeDao.save(scheme);
    }

    public Scheme generateSchemeId(Scheme schemeData) {
        Scheme scheme = new Scheme();
        scheme.setCreationDate(schemeData.getCreationDate());
        scheme.setName(schemeData.getName());
        scheme.setDescription(schemeData.getDescription());
        scheme.setUser(schemeData.getUser());
        scheme.setCategory(schemeData.getCategory());
        scheme = schemeDao.save(scheme);
        scheme.setRates(setRatesId(schemeData.getRates(), scheme.getId()));
        scheme.setElements(setElementsId(schemeData.getElements(), scheme.getId()));
        scheme.setLines(setLinesId(schemeData.getLines(), scheme.getId()));
        scheme.setNodes(setNodesId(schemeData.getNodes(), scheme.getId()));
        return scheme;
    }

    public List<SchemeRating> setRatesId(List<SchemeRating> items, Long schemeId) {
        if(items != null) {
            for (SchemeRating item : items) {
                item.setSchemeId(schemeId);
            }
        }
        return items;
    }

    public List<ElementCoordinates> setElementsId(List<ElementCoordinates> items, Long schemeId) {
        if(items != null) {
            for (ElementCoordinates item : items) {
                item.setSchemeId(schemeId);
            }
        }
        return items;
    }

    public List<Line> setLinesId(List<Line> items, Long schemeId) {
        if(items != null) {
            for (Line item : items) {
                item.setSchemeId(schemeId);
            }
        }
        return items;
    }

    public List<Node> setNodesId(List<Node> items, Long schemeId) {
        if(items != null) {
            for (Node item : items) {
                item.setSchemeId(schemeId);
            }
        }
        return items;
    }

}
