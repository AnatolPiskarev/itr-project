import User from "./User";
import SchemeRating from "./SchemeRating";
import ElementCoordinates from "./ElementCoordinates";
import Tag from "./Tag";
import Line from "./Line";
export default class Scheme {
    private _id: number;
    private _user: User;
    private _name: string;
    private _description: string;
    private _category: string;
    private _creationDate: number;
    private _rates: SchemeRating[];
    private _elements:Array<ElementCoordinates>;
    private _tags:  Array<Tag>;
    private _lines: Array<Line>;
  //  private _nodes: Array<Node>;

  constructor(id:number, user:User, name:string, description:string, category:string, creationDate:number,
              rates:SchemeRating[], elements:Array<ElementCoordinates>, tags:Array<Tag>, lines:Array<Line>,
              nodes:Array<Node>) {
    this._id = id;
    this._user = user;
    this._name = name;
    this._description = description;
    this._category = category;
    this._creationDate = creationDate;
    this._rates = rates;
    this._elements = elements;
    this._tags = tags;
    this._lines = lines;
   // this._nodes = nodes;
  }

  get id():number{
      return this._id;
      }

  set id(value:number){
      this._id=value;
      }

  get user():User{
      return this._user;
      }

  set user(value:User){
      this._user=value;
      }

  get name():string{
      return this._name;
      }

  set name(value:string){
      this._name=value;
      }

  get description():string{
      return this._description;
      }

  set description(value:string){
      this._description=value;
      }

  get category():string{
      return this._category;
      }

  set category(value:string){
      this._category=value;
      }

  get creationDate():number{
      return this._creationDate;
      }

  set creationDate(value:number){
      this._creationDate=value;
      }

  get rates():SchemeRating[]{
      return this._rates;
      }

  set rates(value:Array){
      this._rates=value;
      }

  get elements():Array<ElementCoordinates>{
      return this._elements;
      }

  set elements(value:Array<ElementCoordinates>){
      this._elements=value;
      }

  get tags():Array<Tag>{
      return this._tags;
      }

  set tags(value:Array<Tag>){
      this._tags=value;
      }

  get lines():Array<Line>{
      return this._lines;
      }

  set lines(value:Array<Line>){
      this._lines=value;
      }

  // get nodes():Array<Node>{
  //     return this._nodes;
  //     }
  //
  // set nodes(value:Array<Node>){
  //     this._nodes=value;
  //     }
}
