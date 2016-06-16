import {Component} from "@angular/core";
import {HeaderComponent} from "./tiles/header.component";
import  {HomeComponent} from "./home/home.component";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
    selector: 'todo-app',
    templateUrl: '/modules/angular/app/app.component.html',
    directives: [HeaderComponent, HomeComponent]

})
export class AppComponent {
    private EnUrl = '/modules/angular/app//config/en-us.json';
    private RuUrl = '/modules/angular/app/config/ru-ru.json';
    private property:any = {};
    private logout:string;

    constructor(private http:Http) {
        this.http.get(this.RuUrl)
            .map(res => res.json())
            .subscribe((env_data) => {
                this.logout = env_data.logout;
                this.property = env_data;
                console.log(this.property);
            });
    }

    load(url:string) {
        this.http.get(url)
            .map(res => res.json())
            .subscribe((env_data) => {
                this.logout = env_data.logout;
                this.property = env_data;
                console.log(this.property.logout);

            });

    }

}
