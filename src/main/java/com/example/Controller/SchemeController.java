package com.example.Controller;
import com.example.common.entity.Element;
import com.example.common.entity.Scheme;
import com.example.common.entity.Tag;
import com.example.service.api.ElementService;
import com.example.service.api.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
public class SchemeController {
    @Autowired
  private  ResourceLoader resourceLoader;
 //   private SchemeService schemeService;
    @Autowired
    private ElementService elementService;

    @RequestMapping(value = "/get-elements", headers = "Accept=application/json")
    public List<Element> getElements() {
        return elementService.findAll();
    }
    @ResponseBody
    @RequestMapping(value = "/save-scheme", method = RequestMethod.POST)
    public String saveScheme(@RequestBody Tag scheme) {
        System.out.println(scheme.getName());
        return"good";
    }

    @RequestMapping(value = "/update-elements")
        public void updateElements() throws IOException {
//        List<Element> elements = elementService.findAll();
//        ClassLoader classLoader = getClass().getClassLoader();
//
//        Resource[] loadResources = ResourcePatternUtils.getResourcePatternResolver(resourceLoader).getResources("classpath*: static/hui/*.png");
//
//        int a = loadResources.length;
//        for (int i = 0; i < listOfFiles.length; i++) {
//            for(Element element: elements) {
//                if (listOfFiles[i].getName().equals(element.getName()))
//                    break;
//            }
//            Element element = new Element();
//            element.setName(listOfFiles[i].getName());
//            element = elementService.save(element);
//            }
      }

}
