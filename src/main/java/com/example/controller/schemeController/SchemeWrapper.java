package com.example.controller.schemeController;

import com.example.common.entity.*;

import java.util.List;

public class SchemeWrapper {
    private Long id;
    private User user;
    private String name;
    private String description;
    private String category;
    private Long creationDate;
    private List<SchemeRating> rates;
    private List<ElementCoordinates> elements;
    private List<Tag> tags;
    private List<Line> lines;
    private List<Node> nodes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Long creationDate) {
        this.creationDate = creationDate;
    }

    public List<SchemeRating> getRates() {
        return rates;
    }

    public void setRates(List<SchemeRating> rates) {
        this.rates = rates;
    }

    public List<ElementCoordinates> getElements() {
        return elements;
    }

    public void setElements(List<ElementCoordinates> elements) {
        this.elements = elements;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public List<Line> getLines() {
        return lines;
    }

    public void setLines(List<Line> lines) {
        this.lines = lines;
    }

    public List<Node> getNodes() {
        return nodes;
    }

    public void setNodes(List<Node> nodes) {
        this.nodes = nodes;
    }
}

