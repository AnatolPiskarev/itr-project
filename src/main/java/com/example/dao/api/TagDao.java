package com.example.dao.api;

import com.example.common.entity.Scheme;
import com.example.common.entity.Tag;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

/**
 * Created by Anatol on 10.06.16.
 */
@Transactional
public interface TagDao extends BaseDao<Tag> {
    Tag findByName(String name);

    Set<Scheme> findById(Long id);
}
