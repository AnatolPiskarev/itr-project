import {Component, EventEmitter,  Output} from '@angular/core';
import TranslationService from '../config/TranslationService';
@Component({
    selector: 'header-app',
    template: require('./header.component.html'),
    styles: [require('./styles.css')],

})
export class HeaderComponent {
    @Output() showSchemeSignal = new EventEmitter();
    private lang: string = 'ru';
    private newProject: string;
    private profile: string;
    private logout: string;
    private signIn: string;
    private scheme: string = 'scheme';
    constructor() {
      this.load(this.lang);
    }
    public load(lang:string) {
        this.lang = lang;
        console.log(this.lang);
        this.newProject = TranslationService.get('newProject', this.lang);
        this.profile = TranslationService.get('profile', this.lang);
        this.logout = TranslationService.get('logout', this.lang);
        this.signIn = TranslationService.get('signIn', this.lang);
    }
    public showScheme() {
        this.showSchemeSignal.emit(this.scheme);
    }
}