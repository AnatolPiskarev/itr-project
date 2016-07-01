import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import  {NgSwitch, NgSwitchCase, NgSwitchDefault} from  '@angular/common';
import { ApiService } from './shared';

import '../style/app.scss';
import {HeaderComponent} from "./tiles/header.component";
import {SchemeComponent} from "./drawing/scheme.component";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService], 
    directives: [...ROUTER_DIRECTIVES, HeaderComponent],
  template: require('./app.component.html'),
  styles: [require('./styles.css')],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
    private page: string  = 'init';

  constructor(private api: ApiService) {
      
 }
    showScheme() {
        this.page= 'scheme';
        console.log(this.page);
    }
}
