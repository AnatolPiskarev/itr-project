import { Component, Output, EventEmitter} from '@angular/core';
import { NgForm }    from '@angular/common';
import Scheme from "../dto/Scheme";
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'save-form',
  template: require('./saveScheme.component.html'),
  directives: [FORM_DIRECTIVES],
  styles: [require('./scheme.component.scss')],
})

export class saveSchemeComponent {
  @Output() schemeCreated = new EventEmitter();
  private scheme: Scheme;
  submitted = false;
  categories = ["Vibrators", "Custom"];
  onSubmit(form:any):void {
    if(form.category==null) form.category = "custom";
    this.submitted = true
    this.scheme= new Scheme(null,null, form.title, form.description, form.category, null, null, null, null, null, null);
    this.schemeCreated.emit(this.scheme);
  }
}
