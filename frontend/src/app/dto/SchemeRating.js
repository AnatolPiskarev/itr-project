"use strict";
var SchemeRating = (function () {
    function SchemeRating(id, value, userId, schemeId) {
        this.id = id;
        this.value = value;
        this.userId = userId;
        this.schemeId = schemeId;
    }
    SchemeRating.prototype.getId = function () {
        return this.id;
    };
    SchemeRating.prototype.setIdd = function (value) {
        this.id = value;
    };
    SchemeRating.prototype.getValue = function () {
        return this.value;
    };
    SchemeRating.prototype.setValue = function (value) {
        this.value = value;
    };
    SchemeRating.prototype.getUserId = function () {
        return this.userId;
    };
    SchemeRating.prototype.setUserId = function (value) {
        this.userId = value;
    };
    SchemeRating.prototype.getSchemeId = function () {
        return this.schemeId;
    };
    SchemeRating.prototype.setSchemeId = function (value) {
        this.schemeId = value;
    };
    return SchemeRating;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SchemeRating;
//# sourceMappingURL=SchemeRating.js.map