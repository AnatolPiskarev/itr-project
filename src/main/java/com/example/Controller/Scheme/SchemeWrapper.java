package com.example.Controller.Scheme;

import com.example.common.entity.Scheme;

/**
 * Created by Anatol on 19.06.16.
 */
public class SchemeWrapper extends Scheme {
    private Double rate;
    public Double getRate() {
        return rate;
    }

    public SchemeWrapper(Scheme scheme) {
        this.setUser(scheme.getUser());
        this.setRates(scheme.getRates());
        this.setId(scheme.getId());
        this.setCreationDate(scheme.getCreationDate());
        this.setName(scheme.getName());
        this.setElements(scheme.getElements());
        this.setDescription(scheme.getDescription());
        this.setCategory(scheme.getCategory());
        this.setTags(scheme.getTags());
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }
}
