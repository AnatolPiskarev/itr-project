import {Element} from "../dto/Element";
export class ElementService {
  
  public getElementsFromJson(data:any): Array<Element> {
    let elements: Array<Element> = [];
    for(var i in data) {
      elements.push(this.getElementFromJson(data[i]));
    }
    return elements;
  }

  public  getElementFromJson(data: any): Element {
    let element = new Element(data.id, data.name);
    return element;
  }
}
