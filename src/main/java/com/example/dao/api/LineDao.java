package com.example.dao.api;

import com.example.common.entity.Line;
import com.example.common.entity.Scheme;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 11.06.16.
 */
@Transactional
public interface LineDao extends BaseDao<Line> {
 List<Line> findByScheme(Scheme scheme);
}
