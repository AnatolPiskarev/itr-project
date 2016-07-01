"use strict";
var testing_1 = require('@angular/core/testing');
// to use Translate Service, we need Http, and to test Http we need to mock the backend
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var core_1 = require('@angular/core');
// Load the implementations that should be tested
var shared_1 = require('./shared');
var app_component_1 = require('./app.component');
describe('App', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        app_component_1.AppComponent,
        shared_1.ApiService,
        http_1.BaseRequestOptions,
        testing_2.MockBackend,
        // Provide a mocked (fake) backend for Http
        core_1.provide(http_1.Http, {
            useFactory: function useFactory(backend, defaultOptions) {
                return new http_1.Http(backend, defaultOptions);
            },
            deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
        })
    ]; });
    testing_1.it('should have an url', testing_1.inject([app_component_1.AppComponent], function (app) {
        expect(app.url).toEqual('https://github.com/preboot/angular2-webpack');
    }));
});
//# sourceMappingURL=app.component.spec.js.map