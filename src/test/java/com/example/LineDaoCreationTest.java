package com.example;

import com.example.common.entity.Line;
import com.example.common.entity.Scheme;
import com.example.dao.api.LineDao;
import com.example.dao.api.SchemeDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by Anatol on 11.06.16.
 */
public class LineDaoCreationTest extends SchemeApplicationTests {
    @Autowired
    private LineDao lineDao;
    @Autowired
    private SchemeDao schemeDao;
    private Scheme scheme;

    @Before
    public void Before() {
        createFakeData();
        scheme = ((List<Scheme>) schemeDao.findAll()).get(0);

    }

    @Test
    public void getLinesBySchemeTest() {
        assertEquals(lineDao.findByScheme(scheme).size(),((List) lineDao.findAll()).size());
        assertNotNull(lineDao.findByScheme(scheme).size());

    }
}
