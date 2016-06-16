package com.example.common.entity;


import javax.persistence.*;
import java.util.Set;

/**
 * Created by Anatol on 10.06.16.
 */
@Entity
@Table(name = "tag")
public class Tag extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;

    @ManyToMany(mappedBy = "tags", fetch = FetchType.EAGER)
    private Set<Scheme> schemes;

    public Set<Scheme> getSchemes() {
        return schemes;
    }

    public void setSchemes(Set<Scheme> schemes) {
        this.schemes = schemes;
    }

    public String getName() {
        return name;
    }

    public String setName(String name) {
        this.name = name;
        return name;
    }


}
