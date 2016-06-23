import User from "./User";
import SchemeRating from "./SchemeRating";
import ElementCoordinates from "./ElementCoordinates";
import Tag from "./Tag";
export default class Scheme {
    private id: number;
    private user: User;
    private name: string;
    private description: string;
    private category: string;
    private creationDate: number;
    private rates: SchemeRating[];
    private elements: ElementCoordinates[];
    private tags: Tag[];
    constructor(id:number, user:User, name: string, description:string, category:string, creationDate: number, rates:SchemeRating[], elements:ElementCoordinates[], tags:Tag[]) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.description = description;
        this.category = category;
        this.creationDate = creationDate;
        this.rates = rates;
        this.elements = elements;
        this.tags = tags;
    }


    public getId():number {
        return this.id;
    }

    public setId(value:number) {
        this.id = value;
    }

    public  getUser():User {
        return this.user;
    }
    public getName():string {
        return this.name;
    }
    public setName(value:string) {
        this.name = value;
    }


    public setUser(value:User) {
        this.user = value;
    }

    public getCategory():string {
        return this.category;
    }
    
    public setCategory(value:string) {
        this.category = value;
    }
    
    public getCreationDate():number {
        return this.creationDate;
    }
    
    public setCreationDate(value:number) {
        this.creationDate = value;
    }

    public getRates():SchemeRating[] {
        return this.rates;
    }

    public setRates(value:Array<SchemeRating>) {
        this.rates = value;
    }

    public geElements():ElementCoordinates[] {
        return this.elements;
    }
    
    public setElements(value:Array<ElementCoordinates>) {
        this.elements = value;
    }
    
    public getTags():Tag[] {
        return this.tags;
    }
    
    public setTags(value:Array<Tag>) {
        this.tags = value;
    }
}