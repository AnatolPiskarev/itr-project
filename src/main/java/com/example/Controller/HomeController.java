package com.example.controller;

import com.example.common.entity.Scheme;
import com.example.service.api.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Anatol on 12.06.16.
 */
@RestController
public class HomeController {
    @Autowired
    private SchemeService schemeService;

    @RequestMapping(value = "/last-created", headers = "Accept=application/json")
    public List<Scheme> getLastCreated() {
        List<Scheme> schemes = schemeService.getLasts(10);
        return schemes;
    }

    @RequestMapping(value = "/top-schemes", headers = "Accept=application/json")
    public List<Scheme> getTop() {
        List<Scheme> schemes = schemeService.getTop(0, 10);
        return schemes;
    }
}
