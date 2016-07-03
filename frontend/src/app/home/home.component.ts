import { Component,  OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import Scheme from "../dto/Scheme";
import {SchemeService} from "../service/SchemeService";

@Component({
  selector: 'my-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')]
})
export class HomeComponent {
    private lastSchemes:Array<Scheme> = [];
    private topSchemes:Array<Scheme> = [];
    private category:string = 'category';
    private createdBy:string = 'createdBy';
    private schemeRates: Map<Scheme, number> = new Map<Scheme, number>();
    private schemeService: SchemeService;



    constructor(private http:Http) {

    }
    ngOnInit() {
      this.schemeService = new SchemeService();
        //noinspection TypeScriptUnresolvedFunction
       this.lastSchemes = this.getLastSchemes();
        //noinspection TypeScriptUnresolvedFunction
        this.http.get("/top-schemes")
            .map(res => res.json())
            .subscribe((env_data) => {
                console.log(env_data)
                this.topSchemes = this.schemeService.getSchemes(env_data);
                console.log(this.schemeRates);
                for(var i in this.topSchemes) {
                    this.schemeRates.set(this.topSchemes[i], this.schemeService.getSchemeCurrentRate(this.topSchemes[i]));
                }
            });
    }

   public getLastSchemes():Array<Scheme> {
     let lastSchemes: Array<Scheme> = [];
     //noinspection TypeScriptUnresolvedFunction
     this.http.get("/last-created")
       .map(res => res.json())
       .subscribe((env_data) => {
         console.log(env_data);
         lastSchemes = this.schemeService.getSchemes(env_data);
       });
     return lastSchemes;
   }
}
