package com.example.service.api;

import com.example.common.entity.Scheme;

import java.util.List;

/**
 * Created by Anatol on 15.06.16.
 */
public interface SchemeService extends BaseService<Scheme> {
    List<Scheme> getByUserId(Long userId);
    List<Scheme> getByCategory(String category);
    List<Scheme> getLasts(int limit);
    List<Scheme> getTop(int index, int count);
}
