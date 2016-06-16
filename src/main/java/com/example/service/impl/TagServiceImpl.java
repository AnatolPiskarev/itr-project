package com.example.service.impl;

import com.example.common.entity.Scheme;
import com.example.common.entity.Tag;
import com.example.dao.api.TagDao;
import com.example.service.api.TagService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
@Service
public class TagServiceImpl extends BaseServiceImpl<Tag, TagDao> implements TagService {
    @Override
    public List<Tag> getTagsByScheme(Scheme scheme) {
        return null;
    }
}
