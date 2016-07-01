import {Element} from "./Element";
export default class ElementCoordinates {
    private _id: number;
    private _element: Element;
    private _xCoordinate: number;
    private _yCoordinate: number;
    private _rotation: string;


  get id():number{
      return this._id;
      }

  set id(value:number){
      this._id=value;
      }

  get element():Element{
      return this._element;
      }

  set element(value:Element){
      this._element=value;
      }

  get xCoordinate():number{
      return this._xCoordinate;
      }

  set xCoordinate(value:number){
      this._xCoordinate=value;
      }

  get yCoordinate():number{
      return this._yCoordinate;
      }

  set yCoordinate(value:number){
      this._yCoordinate=value;
      }

  get rotation():string{
      return this._rotation;
      }

  set rotation(value:string){
      this._rotation=value;
      }
}
