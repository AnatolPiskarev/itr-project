import User from "./User";
import SchemeRating from "./SchemeRating";
import ElementCoordinates from "./ElementCoordinates";
import Tag from "./Tag";
import Line from "./Line";
import Node from "./Node";
export default class Scheme {
    private id: number;
    private user: User;
    private name: string;
    private description: string;
    private category: string;
    private creationDate: number;
    private rates: SchemeRating[];
    private elements:Array<ElementCoordinates>;
    private tags:  Array<Tag>;
    private lines: Array<Line>;
    private nodes: Array<Node>;

  constructor(id:number, user:User, name:string, description:string, category:string, creationDate:number,
              rates:SchemeRating[], elements:Array<ElementCoordinates>, tags:Array<Tag>, lines:Array<Line>,
              nodes:Array<Node>) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.description = description;
    this.category = category;
    this.creationDate = creationDate;
    this.rates = rates;
    this.elements = elements;
    this.tags = tags;
    this.lines = lines;
    this.nodes = nodes;
  }

  getId():number{
      return this.id;
      }

  setId(value:number){
      this.id=value;
      }

  getUser():User{
      return this.user;
      }

  setUser(value:User){
      this.user=value;
      }

  getName():string{
      return this.name;
      }

  setName(value:string){
      this.name=value;
      }

  getDescription():string{
      return this.description;
      }

  setDescription(value:string){
      this.description=value;
      }

  getCategory():string{
      return this.category;
      }

  setCategory(value:string){
      this.category=value;
      }

  getCreationDate():number{
      return this.creationDate;
      }

  setCreationDate(value:number){
      this.creationDate=value;
      }

  getRates():SchemeRating[]{
      return this.rates;
      }

  setRates(value:Array){
      this.rates=value;
      }

  getElements():Array<ElementCoordinates>{
      return this.elements;
      }

  setElements(value:Array<ElementCoordinates>){
      this.elements=value;
      }

  getTags():Array<Tag>{
      return this.tags;
      }

  setTags(value:Array<Tag>){
      this.tags=value;
      }

  getLines():Array<Line>{
      return this.lines;
      }

  setLines(value:Array<Line>){
      this.lines=value;
      }

  getNodes():Array<Node>{
      return this.nodes;
      }

  setNodes(value:Array<Node>){
      this.nodes=value;
      }
}
