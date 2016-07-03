import SchemeRating from "../dto/SchemeRating";
export class SchemeRatingService {
  
  public getRatesFromJson(data:any):Array<SchemeRating> {
    let rates:Array<SchemeRating> = [];
    for (var i in data) {
      let rate:SchemeRating = new SchemeRating(data[i].id, data[i].value, data[i].userId, data[i].schemeId);
      rates.push(rate);
    }
    return rates;
  }
}
