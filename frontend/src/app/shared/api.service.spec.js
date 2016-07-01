"use strict";
var testing_1 = require('@angular/core/testing');
var api_service_1 = require('./api.service');
testing_1.describe('Api Service', function () {
    testing_1.beforeEachProviders(function () { return [api_service_1.ApiService]; });
    testing_1.it('should ...', testing_1.inject([api_service_1.ApiService], function (api) {
        testing_1.expect(api.title).toBe('Angular 2');
    }));
});
//# sourceMappingURL=api.service.spec.js.map