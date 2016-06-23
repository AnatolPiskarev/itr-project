import {Element} from "./Element";
export default class ElementCoordinates {
    private id: number;
    private element: Element;
    private xCoordinate: number;
    private yCoordinate: number;
    private rotation: string;


    constructor(id:number, element:Element, xCoordinate:number, yCoordinate:number, rotation:string) {
        this.id = id;
        this.element = element;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.rotation = rotation;
    }
}