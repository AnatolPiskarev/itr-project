package com.example.Controller;

import com.example.common.entity.Scheme;
import com.example.service.impl.SchemeSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by ugncry on 28.06.2016.
 */
@RestController
public class SearchController {

    @Autowired
    private SchemeSearchService searchService;

    @RequestMapping(value = "/search/{item}", headers = "Accept=application/json")
    public Set<Scheme> searchScheme(@PathVariable(value = "item") final String item) {
        Set<Scheme> searchedSet = new HashSet<>(searchService.search(item));
        return searchedSet;
    }

}
