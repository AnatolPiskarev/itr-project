package com.example.service.impl;

import com.example.common.entity.Comment;
import com.example.dao.api.CommentDao;
import com.example.service.api.CommentService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class CommentServiceImpl extends BaseServiceImpl<Comment, CommentDao> implements CommentService {
    @Override
    public List<Comment> findByUserId(Long userId) {
        return dao.findByUserId(userId);
    }

    @Override
    public List<Comment> findBySchemeId(Long schemeId) {
        return dao.findBySchemeId(schemeId);
    }
}
