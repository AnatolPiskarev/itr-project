import "rxjs/add/operator/map";
import {Component, ElementRef, OnInit} from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
import * as fabric from 'fabric';


@Component({
  selector: 'scheme',
  template: require('./scheme.component.html'),
  styles: [require('./scheme.component.scss')],
})
export class UserSchemeComponent {
  elementRef: ElementRef;

  constructor(    private route: ActivatedRoute,
                  private router: Router) {

  }
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let userName = params['user']; // (+) converts string 'id' to a number
      console.log(userName);
    });
  }
}
