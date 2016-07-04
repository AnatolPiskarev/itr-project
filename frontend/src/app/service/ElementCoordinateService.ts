import ElementCoordinates from "../dto/ElementCoordinates";
import {ElementService} from "./ElementService";
import {Element} from "../dto/Element";
export class ElementCoordinateService {
  private elementService: ElementService = new ElementService();


  getElementCoordinatesFromJson(data:any):Array<ElementCoordinates> {
    let elements:Array<ElementCoordinates> = [];
    for (var i in data) {
      let element: Element = this.elementService.getElementFromJson(data[i].element);
      let elementCoordinate: ElementCoordinates = new ElementCoordinates();
      elementCoordinate.setElement(element)
      elementCoordinate.setId( data[i].id);
      elementCoordinate.setSchemeId(data[i].schemeId);
      elementCoordinate.setXCoordinate(data[i].xCoordinate);
      elementCoordinate.setYCoordinate(data[i].yCoordinate);
      elementCoordinate.setRotation(data[i].rotation);
      elementCoordinate.setText(data[i].text);
      elements.push(elementCoordinate);
    }
    return elements;
  }
}
