import {Component, OnInit} from '@angular/core';
import {Scheme} from "../dto/Scheme";
import {Http} from "@angular/http";
import {ActivatedRoute} from '@angular/router';
import {SchemeService} from "../service/SchemeService"


@Component({
    selector: 'my-search',
    template: require('./search.component.html'),
    styles: [require('./search.component.scss')]
})

export class SearchComponent implements OnInit {

    private foundSchemes:Array<Scheme> = [];
    private listLength:number = 0;
    private schemeService:SchemeService = new SchemeService();

    ngOnInit():any {
        this.route.params.subscribe(params => {
            this.getSearchResults(params['item']);
        });
    }

    constructor(private http:Http, private route:ActivatedRoute) {
    }

    getSearchResults(search:string) {
        //noinspection TypeScriptUnresolvedFunction
        this.http.get(`/search/${search}`)
            .map(res=>res.json())
            .subscribe((env_data) => {
                this.foundSchemes = this.schemeService.getSchemes(env_data);
                this.listLength = this.foundSchemes.length;
            });
    }
    
    

}