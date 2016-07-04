package com.example.service.impl;

import com.example.common.entity.Scheme;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
@Transactional
public class SchemeSearchService {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Scheme> search(String parameter) {
        FullTextEntityManager fullTextEntityManager =
                org.hibernate.search.jpa.Search.getFullTextEntityManager(entityManager);

        QueryBuilder queryBuilder = fullTextEntityManager.getSearchFactory()
                .buildQueryBuilder().forEntity(Scheme.class).get();

        org.apache.lucene.search.Query query =
                queryBuilder
                        .keyword()
                        .onFields("name", "description", "category", "tagList.name").ignoreFieldBridge()
                        .matching(parameter)
                        .createQuery();

        org.hibernate.search.jpa.FullTextQuery jpaQuery =
                fullTextEntityManager.createFullTextQuery(query, Scheme.class);

        @SuppressWarnings("unchecked")
        List<Scheme> results = jpaQuery.getResultList();

        return results;

    }
}
