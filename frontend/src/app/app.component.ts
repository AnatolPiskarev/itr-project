import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';

import '../style/app.scss';
import {HeaderComponent} from "./tiles/header.component";

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
  private lang: string = 'ru';

  public test: string;
  constructor(private api: ApiService) {
    console.log((this.lang));
    this.test = 'test';
 }
  public load(lang: string) {
    this.lang = lang;
  }
}
