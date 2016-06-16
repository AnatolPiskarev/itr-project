package com.example;

import com.example.common.entity.Element;
import com.example.common.entity.ElementCoordinates;
import com.example.common.entity.Scheme;
import com.example.common.entity.User;
import com.example.dao.api.ElementCoordinatesDao;
import com.example.dao.api.ElementDao;
import com.example.dao.api.SchemeDao;
import com.example.dao.api.UserDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by Anatol on 11.06.16.
 */
public class SchemeDaoCreationTest extends SchemeApplicationTests {
    @Autowired
    private ElementDao elementDao;
    @Autowired
    private SchemeDao schemeDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private ElementCoordinatesDao elementCoordinatesDao;
    private Element element;
    private ElementCoordinates coordinates;
    private Scheme scheme;

    @Before
    public void Before() {
        createFakeData();
        User user = userDao.findByPseudonym("Onotole");
        for(int i = 0; i<20; i++) {
            Scheme scheme = new Scheme();
            scheme.setUser(user);
            scheme.setName("chlenodiodnii most" + i);
            scheme.setCategory("huevypryamitel");
            scheme.setDescription("vypryamlyaet hui");
            scheme.setCreationDate(1L + i);
            scheme = schemeDao.save(scheme);
        }
        scheme = ((List<Scheme>) schemeDao.findAll()).get(0);

    }
    @Test
    public void getCoordinatesTest() {
        assertNotNull(scheme.getElements().size());
        assertNotNull(scheme.getRates().size());
        List<Scheme> list = schemeDao.getLasts(10);
        assertEquals(schemeDao.getLasts(10).size(), 10);

    }
}
