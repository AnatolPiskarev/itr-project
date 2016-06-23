const en = require('./en-us.json');
const ru = require('./ru-ru.json');

export default class TranslationService {
    
    static get(key:string, lang: string):string {
        if (lang === 'ru') {
            return ru[key];
        }
        else if(lang === 'en') {
            return en[key];
        }
    }
}
