package com.example.dao.api;

import com.example.common.entity.Scheme;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 11.06.16.
 */
@Transactional
public interface SchemeDao extends BaseDao<Scheme> {
   String query = "SELECT * from  scheme  ORDER BY ID DESC LIMIT ?";
   List<Scheme> findByUserId(Long userId);
   List<Scheme> findByCategory(String category);
   @Query(value = query,  nativeQuery = true)
   List<Scheme> getLasts(int limit);
}
