package com.example.Controller;

import com.example.common.entity.*;

import java.util.List;
import java.util.Set;

public class SchemeWrapper {
    private Long _id;
    private User _user;
    private String _name;
    private String _description;
    private String _category;
    private Long _creationDate;
    private List<SchemeRating> _rates;
    private List<ElementCoordinates> _elements;
    private List<Tag> _tags;
    private List<Line> _lines;

    public Long get_id() {
        return _id;
    }

    public void set_id(Long _id) {
        this._id = _id;
    }

    public User get_user() {
        return _user;
    }

    public void set_user(User _user) {
        this._user = _user;
    }

    public String get_name() {
        return _name;
    }

    public void set_name(String _name) {
        this._name = _name;
    }

    public String get_description() {
        return _description;
    }

    public void set_description(String _description) {
        this._description = _description;
    }

    public String get_category() {
        return _category;
    }

    public void set_category(String _category) {
        this._category = _category;
    }

    public Long get_creationDate() {
        return _creationDate;
    }

    public void set_creationDate(Long _creationDate) {
        this._creationDate = _creationDate;
    }

    public List<SchemeRating> get_rates() {
        return _rates;
    }

    public void set_rates(List<SchemeRating> _rates) {
        this._rates = _rates;
    }

    public List<ElementCoordinates> get_elements() {
        return _elements;
    }

    public void set_elements(List<ElementCoordinates> _elements) {
        this._elements = _elements;
    }

    public List<Tag> get_tags() {
        return _tags;
    }

    public void set_tags(List<Tag> _tags) {
        this._tags = _tags;
    }

    public List<Line> get_lines() {
        return _lines;
    }

    public void set_lines(List<Line> _lines) {
        this._lines = _lines;
    }
}
