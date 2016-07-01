import { Component,  OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import Scheme from "../dto/Scheme";
import User from "../dto/User";
import SchemeRating from "../dto/SchemeRating";
import Tag from "../dto/Tag";
import ElementCoordinates from "../dto/ElementCoordinates";
import {Element} from "../dto/Element";
import {debug} from "util";

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



    constructor(private http:Http) {

    }
    ngOnInit() {
        //noinspection TypeScriptUnresolvedFunction
        this.http.get("/last-created")
            .map(res => res.json())
            .subscribe((env_data) => {
                console.log(env_data);
                this.lastSchemes = this.getSchemes(env_data);
            });
        //noinspection TypeScriptUnresolvedFunction
        this.http.get("/top-schemes")
            .map(res => res.json())
            .subscribe((env_data) => {
                console.log(env_data)
                this.topSchemes = this.getSchemes(env_data);
                console.log(this.schemeRates);
                for(var i in this.topSchemes) {
                    this.schemeRates.set(this.topSchemes[i], this.getSchemeCurrentRate(this.topSchemes[i]));
                }
            });
    }

    getSchemes(env_data): Array<Scheme> {
        let  schemes: Array<Scheme> = [];
        for (var i in env_data) {
            let user:User = this.getUser(env_data[i].user);
            let rates:Array<SchemeRating> = this.getRates(env_data[i].rates);
            let tags:Array<Tag> = this.getTags(env_data[i].tags);
            let elements: Array<ElementCoordinates> = this.getElementCoordinates(env_data[i].elements);
            let scheme:Scheme = new Scheme(env_data[i].id, user, env_data[i].name, env_data[i].description,
                env_data[i].category, env_data[i].creationDate, rates, elements, tags);
            schemes.push(scheme);
        }
        return schemes;
    }

    getRates(data:any):Array<SchemeRating> {
        let rates:Array<SchemeRating> = [];
        for (var i in data) {
            let rate:SchemeRating = new SchemeRating(data[i].id, data[i].value, data[i].userId, data[i].schemeId);
            rates.push(rate);
        }
        return rates;
    }

    getTags(data:any):Array<Tag> {
        let tags:Array<Tag> = [];
        for (var i in data) {
            let tag:Tag = new Tag(data[i].id, data[i].name);
            tags.push(tag);
        }
        return tags;

    }

    getUser(data:any):User {
        let user:User = new User(data.id, data.fullName, data.pseudonym, data.email, data.password, data.role,
            data.isActive);
        return user;
    }

    getElementCoordinates(data:any):Array<ElementCoordinates> {
        let elements:Array<ElementCoordinates> = [];
        for (var i in data) {
            let element: Element = this.getElement(data[i].element);
            let elementCoordinate:ElementCoordinates = new ElementCoordinates(data[i].id, element, data[i].xCoordinate,
            data[i].yCoordinate, data[i].rotation);
            elements.push(elementCoordinate);
        }
        return elements;
    }

    getElement(data: any): Element {
        let element = new Element(data.id, data.name);
        return element;

    }
    
    getSchemeCurrentRate(scheme:Scheme): number {
        let rates: Array<SchemeRating> = scheme.getRates();

        let rate: number  = 0;
        for(var i in rates)
        {
             rate += rates[i].getValue();
        }
        return( rate/rates.length);
    }

}
