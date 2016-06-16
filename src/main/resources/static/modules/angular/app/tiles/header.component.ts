import {Component, Input} from '@angular/core';
@Component({
    selector: 'header-app',
    templateUrl: '/modules/angular/app/tiles/header.component.html',

})
export class HeaderComponent {
    @Input() property: any = {};
    constructor() {
        console.log(this.property.logout);

    }
}
