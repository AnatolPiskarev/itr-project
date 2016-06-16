package com.example.dao.api;

import com.example.common.entity.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Anatol on 10.06.16.
 */
@Transactional
public interface CommentDao  extends BaseDao<Comment> {
    List<Comment> findByUserId(Long userId);
    List<Comment> findBySchemeId(Long schemeId);
}
