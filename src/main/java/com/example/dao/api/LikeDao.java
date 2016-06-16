package com.example.dao.api;

import com.example.common.entity.Like;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 12.06.16.
 */
@Transactional
public interface LikeDao  extends BaseDao<Like> {
    List<Like> findByCommentId(Long commentId);
}
