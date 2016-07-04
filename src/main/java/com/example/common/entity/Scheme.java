package com.example.common.entity;


import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.search.annotations.IndexedEmbedded;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

/**
 * Created by Anatol on 11.06.16.
 */
@Entity
@Table(name = "scheme")
@Indexed
public class Scheme extends BaseEntity {

    @Column(nullable = false)
    @Field
    private String name;

    @Column(nullable = false)
    @Field
    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @Fetch(FetchMode.SELECT)
    private User user;

    @Column(nullable = false)
    private Long creationDate;

    @Column(nullable = false)
    @Field
    private String category;

    @OneToMany(mappedBy = "schemeId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Fetch(FetchMode.SELECT)
    private List<SchemeRating> rates;

    @OneToMany(mappedBy = "schemeId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Fetch(FetchMode.SELECT)
    private List<Node> nodes;

    @OneToMany(mappedBy = "schemeId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Fetch(FetchMode.SELECT)
    private List<Line> lines;

    @OneToMany(mappedBy = "schemeId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Fetch(FetchMode.SELECT)
    private List<ElementCoordinates> elements;

    @ManyToMany(cascade= CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name="tag_scheme", joinColumns=@JoinColumn(name="scheme_id"),
            inverseJoinColumns=@JoinColumn(name="tag_id"))
    @IndexedEmbedded
    private Set<Tag> tags;

    public List<Node> getNodes() {
        return nodes;
    }

    public void setNodes(List<Node> nodes) {
        this.nodes = nodes;
    }

    public List<Line> getLines() {
        return lines;
    }

    public void setLines(List<Line> lines) {
        this.lines = lines;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    public List<ElementCoordinates> getElements() {
        return elements;
    }

    public void setElements(List<ElementCoordinates> elements) {
        this.elements = elements;
    }

    public List<SchemeRating> getRates() {
        return rates;
    }

    public void setRates(List<SchemeRating> rates) {
        this.rates = rates;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Long creationDate) {
        this.creationDate = creationDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}