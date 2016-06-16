package com.example.dao.api;

import com.example.common.entity.Element;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Anatol on 11.06.16.
 */
@Transactional
public interface ElementDao extends BaseDao<Element> {
   Element findByName(String name);
}
