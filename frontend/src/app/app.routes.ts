import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import {SchemeComponent} from "./drawing/scheme.component";
import {UserSchemeComponent} from "./drawing/userScheme.component";

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'draw-scheme', component: SchemeComponent },
  { path: 'scheme/:id', component: UserSchemeComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
