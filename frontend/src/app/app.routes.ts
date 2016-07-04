import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import {SchemeComponent} from "./drawing/scheme.component";
import {SearchComponent} from "./search/search.component";
import {UserSchemeComponent} from "./drawing/userScheme.component";

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'draw-scheme', component: SchemeComponent },
  { path: 'search/:item', component: SearchComponent },
  { path: 'scheme/:id', component: UserSchemeComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
