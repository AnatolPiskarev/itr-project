package com.example.dao.api;

import com.example.common.entity.Like;
import com.example.common.entity.SchemeRating;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 12.06.16.
 */
@Transactional
public interface SchemeRatingDao extends BaseDao<SchemeRating> {
    List<SchemeRating> findBySchemeId(Long schemeId);


    @Query("select avg(r.value) from SchemeRating as r where r.schemeId=:scheme_id")
    public Double getCurrentRate(@Param(value = "scheme_id")Long schemeId);

    @Query("select scheme,(select avg(r.value) from SchemeRating as r where r.schemeId = scheme.id) as rating "
            +" from Scheme as scheme where (select avg(r.value) from SchemeRating as r where r.schemeId = scheme.id) is not null order by rating desc")
    public List<Object[]> getTopSchemes(Pageable pageable);

}
