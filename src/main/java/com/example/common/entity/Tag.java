package com.example.common.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.search.annotations.Field;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by Anatol on 10.06.16.
 */
@Entity
@Table(name = "tag")
public class Tag extends BaseEntity {

    @Column(nullable = false, unique = true)
    @Field
    private String name;
    public String getName() {
        return name;
    }

    public String setName(String name) {
        this.name = name;
        return name;
    }


}
