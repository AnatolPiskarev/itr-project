package com.example;

import com.example.common.entity.Scheme;
import com.example.common.entity.Tag;
import com.example.dao.api.TagDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by Anatol on 10.06.16.
 */
public class TagDaoCreationTest extends SchemeApplicationTests {
   @Autowired
    private TagDao tagDao;
    private Tag tag;

    @Before
    public void before() {
        createFakeData();
        tag = tagDao.findByName("chlen");
    }
    @Test
    public void findAllTest() {
          assertEquals(((List<Tag>) tagDao.findAll()).get(0).getName(), tag.getName());
    }

    @Test
    public void findByNameTest() {
        assertEquals(tagDao.findByName(tag.getName()).getId(), tag.getId());
    }

    @Test
    public void findSchemesByTagTest() {

        Set<Scheme> list = tagDao.findById(tag.getId());
        assertNotNull(list);
    }


}
