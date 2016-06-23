import {Component, Input} from '@angular/core';
import TranslationService from '../config/TranslationService';
@Component({
    selector: 'header-app',
    template: require('./header.component.html'),
    styles: [require('./styles.css')],

})
export class HeaderComponent {
    @Input() test: string;
    private lang: string = 'ru';
    private newProject: string;
    private profile: string;
    private logout: string;
    private signIn: string;
    private scheme: string = 'scheme';
    constructor() {
      this.load(this.lang);
        console.log(this.test);
        console.log(this.newProject);
        console.log(this.logout);
    }
    public load(lang:string) {
        this.lang = lang;
        console.log(this.lang);
        this.newProject = TranslationService.get('newProject', this.lang);
        this.profile = TranslationService.get('profile', this.lang);
        this.logout = TranslationService.get('logout', this.lang);
        this.signIn = TranslationService.get('signIn', this.lang);
    }
}