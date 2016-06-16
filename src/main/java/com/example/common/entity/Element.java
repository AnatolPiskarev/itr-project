package com.example.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Anatol on 10.06.16.
 */
@Entity
@Table(name = "element")
public class Element extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;

    public String getName() {
        return name;
    }

    public String setName(String name) {
        this.name = name;
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Element element = (Element) o;

        return name.equals(element.name);

    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }
}
