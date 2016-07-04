package com.example.controller.schemeController;
import com.example.common.entity.Element;
import com.example.common.entity.Scheme;
import com.example.service.api.ElementService;
import com.example.service.api.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringArrayPropertyEditor;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class SchemeController {
    @Autowired
  private  ResourceLoader resourceLoader;
    @Autowired
    private SchemeService schemeService;
    @Autowired
    private ElementService elementService;

    @RequestMapping(value = "/get-elements", headers = "Accept=application/json")
    public List<Element> getElements() {
        return elementService.findAll();
    }

    @RequestMapping(value = "/save-scheme", method = RequestMethod.POST)
    public Scheme saveScheme(@RequestBody Scheme scheme) {
        scheme = schemeService.save(scheme);
        return scheme;
    }

    @RequestMapping(value = "/get-scheme/{id}", headers = "Accept=application/json")
    public Scheme getSchemeById(@PathVariable(value = "id") final String id) {
       return schemeService.getById(Long.parseLong(id));
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
