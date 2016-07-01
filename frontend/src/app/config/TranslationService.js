"use strict";
var en = require('./en-us.json');
var ru = require('./ru-ru.json');
var TranslationService = (function () {
    function TranslationService() {
    }
    TranslationService.get = function (key, lang) {
        if (lang === 'ru') {
            return ru[key];
        }
        else if (lang === 'en') {
            return en[key];
        }
    };
    return TranslationService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TranslationService;
//# sourceMappingURL=TranslationService.js.map