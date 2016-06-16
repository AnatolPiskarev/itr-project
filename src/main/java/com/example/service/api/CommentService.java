package com.example.service.api;

import com.example.common.entity.Comment;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
public interface CommentService extends BaseService<Comment> {
    List<Comment> findByUserId(Long userId);
    List<Comment> findBySchemeId(Long schemeId);
}
