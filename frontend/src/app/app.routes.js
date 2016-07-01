"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./home');
var scheme_component_1 = require("./drawing/scheme.component");
exports.routes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'draw-scheme', component: scheme_component_1.SchemeComponent },
    { path: ':user', component: scheme_component_1.SchemeComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map