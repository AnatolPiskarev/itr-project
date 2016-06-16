package com.example;

import com.example.common.entity.Element;
import com.example.dao.api.ElementDao;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * Created by Anatol on 11.06.16.
 */
public class ElementDaoCreationTest extends SchemeApplicationTests {
    @Autowired
    private ElementDao elementDao;
    private  Element element;

    @Before
    public void Before() {
        createFakeData();
        element =((List<Element>) elementDao.findAll()).get(0);
    }

    @Test
    public void getElementTest() {
        Element savedElement = elementDao.findByName("Resistor");
        assertEquals(element.getName(), savedElement.getName());
    }


}
