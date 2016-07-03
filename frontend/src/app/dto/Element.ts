export  class Element {
    private id:number;
    private name:string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }

  getId():number{
      return this.id;
      }

  setId(value:number){
      this.id=value;
      }

  getName():string{
      return this.name;
      }

  setName(value:string){
      this.name=value;
      }
}

