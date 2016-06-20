package com.example.Controller;

import com.example.Controller.Scheme.SchemeWrapper;
import com.example.Controller.Scheme.SchemeWrapperLogic;
import com.example.common.entity.Scheme;
import com.example.service.api.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Anatol on 12.06.16.
 */
@RestController
public class HomeController {
    @Autowired
    private SchemeService schemeService;

    @Autowired
    private SchemeWrapperLogic schemeWrapperLogic;

    @RequestMapping(value = "/last-created", headers = "Accept=application/json")
    public List<Scheme> getLastCreated() {
        List<Scheme> schemes = schemeService.getLasts(10);
        return schemes;
    }

    @RequestMapping(value = "/top-schemes", headers = "Accept=application/json")
    public List<SchemeWrapper> getTop() {
        List<SchemeWrapper> schemeWrapps = new ArrayList<>();
        List<Scheme> schemes = schemeService.getTop(0, 10);
        for( Scheme item: schemes) {
            SchemeWrapper schemeWrap =  new SchemeWrapper(item);
            schemeWrap = schemeWrapperLogic.getSchemeRate(schemeWrap);
            schemeWrapps.add(schemeWrap);
        }
        return schemeWrapps;
    }
}
