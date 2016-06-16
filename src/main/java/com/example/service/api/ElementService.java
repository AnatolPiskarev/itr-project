package com.example.service.api;

import com.example.common.entity.Element;

/**
 * Created by Anatol on 15.06.16.
 */
public interface ElementService extends BaseService<Element> {
    Element findByName(String name);
}
