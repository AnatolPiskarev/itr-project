"use strict";
var testing_1 = require('@angular/core/testing');
// Load the implementations that should be tested
var home_component_1 = require('./home.component');
testing_1.describe('Home', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        home_component_1.HomeComponent
    ]; });
    testing_1.it('should log ngOnInit', testing_1.inject([home_component_1.HomeComponent], function (home) {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        home.ngOnInit();
        expect(console.log).toHaveBeenCalledWith('Hello Home');
    }));
});
//# sourceMappingURL=home.component.spec.js.map