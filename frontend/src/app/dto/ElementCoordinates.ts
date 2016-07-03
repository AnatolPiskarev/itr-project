import {Element} from "./Element";
export default class ElementCoordinates {
    private id: number;
    private schemeId: number;
    private element: Element;
    private xCoordinate: number;
    private yCoordinate: number;
    private rotation: string;
    private text: string;

    getText():string{
      return this.text;
      }

  setText(value:string){
      this.text=value;
      }

  getId():number{
      return this.id;
      }

  setId(value:number){
      this.id=value;
      }
  getSchemeId():number{
    return this.schemeId;
  }

  setSchemeId(value:number){
    this.schemeId=value;
  }

  getElement():Element{
      return this.element;
      }

  setElement(value:Element){
      this.element=value;
      }

  getXCoordinate():number{
      return this.xCoordinate;
      }

  setXCoordinate(value:number){
      this.xCoordinate=value;
      }

  getYCoordinate():number{
      return this.yCoordinate;
      }

  setYCoordinate(value:number){
      this.yCoordinate=value;
      }

  getRotation():string{
      return this.rotation;
      }

  setRotation(value:string){
      this.rotation=value;
      }
}
