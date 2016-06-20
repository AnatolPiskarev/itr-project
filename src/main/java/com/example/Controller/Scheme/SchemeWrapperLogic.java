package com.example.Controller.Scheme;

import com.example.common.entity.Scheme;
import com.example.common.entity.SchemeRating;
import com.example.dao.api.SchemeRatingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Anatol on 19.06.16.
 */
@Component
public class SchemeWrapperLogic {
    @Autowired
    private SchemeRatingDao schemeRatingDao;


public SchemeWrapper getSchemeRate(SchemeWrapper schemeWrapper) {
    Integer rateSum = 0;
    for(SchemeRating i : schemeWrapper.getRates()) {
        rateSum += i.getValue();
    }
    schemeWrapper.setRate( (double) rateSum/schemeWrapper.getRates().size());
    return schemeWrapper;
}

}
