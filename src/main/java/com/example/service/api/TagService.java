package com.example.service.api;


import com.example.common.entity.Scheme;
import com.example.common.entity.Tag;

import java.util.List;

/**
 * Created by anatol on 14.03.16.
 */
public interface TagService extends BaseService<Tag> {

    List<Tag> getTagsByScheme(Scheme scheme);
}
