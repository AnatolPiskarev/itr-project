"use strict";
var Scheme = (function () {
    function Scheme(id, user, name, description, category, creationDate, rates, elements, tags) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.description = description;
        this.category = category;
        this.creationDate = creationDate;
        this.rates = rates;
        this.elements = elements;
        this.tags = tags;
    }
    Scheme.prototype.getId = function () {
        return this.id;
    };
    Scheme.prototype.setId = function (value) {
        this.id = value;
    };
    Scheme.prototype.getUser = function () {
        return this.user;
    };
    Scheme.prototype.getName = function () {
        return this.name;
    };
    Scheme.prototype.setName = function (value) {
        this.name = value;
    };
    Scheme.prototype.setUser = function (value) {
        this.user = value;
    };
    Scheme.prototype.getCategory = function () {
        return this.category;
    };
    Scheme.prototype.setCategory = function (value) {
        this.category = value;
    };
    Scheme.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    Scheme.prototype.setCreationDate = function (value) {
        this.creationDate = value;
    };
    Scheme.prototype.getRates = function () {
        return this.rates;
    };
    Scheme.prototype.setRates = function (value) {
        this.rates = value;
    };
    Scheme.prototype.geElements = function () {
        return this.elements;
    };
    Scheme.prototype.setElements = function (value) {
        this.elements = value;
    };
    Scheme.prototype.getTags = function () {
        return this.tags;
    };
    Scheme.prototype.setTags = function (value) {
        this.tags = value;
    };
    return Scheme;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Scheme;
//# sourceMappingURL=Scheme.js.map