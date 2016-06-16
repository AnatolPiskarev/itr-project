package com.example.service.impl;

import com.example.common.entity.Element;
import com.example.dao.api.ElementDao;
import com.example.service.api.ElementService;
import org.springframework.stereotype.Service;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class ElementServiceImpl extends BaseServiceImpl<Element, ElementDao> implements ElementService {
    @Override
    public Element findByName(String name) {
        return findByName(name);
    }
}
