package com.example.common.entity;


import javax.persistence.*;
import java.util.List;
import java.util.Set;

/**
 * Created by Anatol on 11.06.16.
 */
@Entity
@Table(name = "scheme")
public class Scheme extends BaseEntity {

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String description;
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Column(nullable = false)
    private Long creationDate;
    @Column(nullable = false)
    private String category;
    @OneToMany(mappedBy = "schemeId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<SchemeRating> rates;
    @OneToMany(mappedBy = "schemeId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<ElementCoordinates> elements;
    @ManyToMany(cascade= CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name="tag_scheme", joinColumns=@JoinColumn(name="scheme_id"),
            inverseJoinColumns=@JoinColumn(name="tag_id"))
    private Set<Tag> tags;

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