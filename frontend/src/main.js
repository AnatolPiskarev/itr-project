"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app/app.component');
var app_routes_1 = require('./app/app.routes');
var ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    core_1.enableProdMode();
}
else {
    ENV_PROVIDERS.push(platform_browser_1.ELEMENT_PROBE_PROVIDERS);
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, http_1.HTTP_PROVIDERS.concat(app_routes_1.APP_ROUTER_PROVIDERS, ENV_PROVIDERS, [
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy } // use #/ routes, remove this for HTML5 mode
]))
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map