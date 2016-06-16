/**
 * Created by Anatol on 15.06.16.
 */
import "rxjs/add/operator/map";
import {Http} from "@angular/http";
import {Component, Input} from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: '/modules/angular/app/home/home.component.html',

})
export class HomeComponent {
    @Input() property: any = {};
    private schemeList: any = [{}];

    constructor(private http:Http) {
        this.http.get("/last-created")
            .map(res => res.json())
            .subscribe((env_data) => {
                this.schemeList = env_data;
                console.log(this.schemeList);
            });
    }
}
