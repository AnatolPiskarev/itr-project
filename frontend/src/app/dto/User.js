"use strict";
var User = (function () {
    function User(id, fullName, pseudonym, email, password, role, isActive) {
        this.id = id;
        this.fullName = fullName;
        this.pseudonym = pseudonym;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isActive = isActive;
    }
    return User;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
//# sourceMappingURL=User.js.map