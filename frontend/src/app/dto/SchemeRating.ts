export default class SchemeRating {
    private id: number;
    private value: number
    private userId: number;
    private schemeId: number;

    constructor(id:number, value:number, userId:number, schemeId:number) {
        this.id = id;
        this.value = value;
        this.userId = userId;
        this.schemeId = schemeId;
    }

   public getId():number {
        return this.id;
    }
   
    public setIdd(value:number) {
        this.id = value;
    }

    public  getValue():number {
        return this.value;
    }

    public  setValue(value:number) {
        this.value = value;
    }
    
    public getUserId():number {
        return this.userId;
    }
    
    public setUserId(value:number) {
        this.userId = value;
    }
    
    public getSchemeId():number {
        return this.schemeId;
    }
    
    public setSchemeId(value:number) {
        this.schemeId = value;
    }
}