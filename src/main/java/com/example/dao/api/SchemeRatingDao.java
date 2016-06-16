package com.example.dao.api;

import com.example.common.entity.Like;
import com.example.common.entity.SchemeRating;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 12.06.16.
 */
@Transactional
public interface SchemeRatingDao extends BaseDao<SchemeRating> {
    List<SchemeRating> findBySchemeId(Long schemeId);
}
