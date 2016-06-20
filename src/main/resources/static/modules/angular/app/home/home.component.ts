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
    private lastSchemes: any = [{}];
    private topSchemes: any = [{}];

    constructor(private http:Http) {
        this.http.get("/last-created")
            .map(res => res.json())
            .subscribe((env_data) => {
                this.lastSchemes = env_data;
                console.log(this.lastSchemes);
            });
        this.http.get("/top-schemes")
            .map(res => res.json())
            .subscribe((env_data) => {
                this.topSchemes = env_data;
                console.log(this.topSchemes);
                console.log(this.topSchemes[0].scheme.name)
            });
    }
}
