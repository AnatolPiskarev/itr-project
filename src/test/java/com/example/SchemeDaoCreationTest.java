package com.example;

import com.example.common.entity.*;
import com.example.dao.api.*;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
    @Autowired
    private SchemeRatingDao schemeRatingDao;
    private Element element;
    private ElementCoordinates coordinates;
    private Scheme scheme;
    private SchemeRating rating;

    @Before
    public void Before() {
        createFakeData();
        User user = userDao.findByPseudonym("Onotole");
        for(int i = 0; i<10; i++) {
            Scheme scheme = new Scheme();
            scheme.setUser(user);
            scheme.setName("chlenodiodnii most" + i);
            scheme.setCategory("huevypryamitel");
            scheme.setDescription("vypryamlyaet hui");
            scheme.setCreationDate(1L + i);
            scheme = schemeDao.save(scheme);
            rating = new SchemeRating();
            rating.setUserId(user.getId());
            rating.setSchemeId(scheme.getId());
            rating.setValue(i);
            rating = schemeRatingDao.save(rating);
        }
        scheme = ((List<Scheme>) schemeDao.findAll()).get(0);

    }
    @Test
    public void getCoordinatesTest() {
        assertNotNull(scheme.getElements().size());
        assertNotNull(scheme.getRates().size());
        Pageable pageable = new PageRequest(0,10);
        List<Scheme> schemess = schemeRatingDao.getTopSchemes(pageable).stream()
                .map(object ->
                (Scheme) object[0]).collect(Collectors.toList());
        assertEquals(schemeDao.getLasts(10).size(), 10);

    }
}
