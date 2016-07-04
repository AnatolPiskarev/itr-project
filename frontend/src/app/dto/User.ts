export default class User {
    private id: number;
    private fullName: string;
    private pseudonym: string;
    private email: string;
    private role: string;
    private isActive: boolean;
    private facebookId: number;

    constructor(id:number, fullName:string, pseudonym:string, email:string, role:string,
                isActive:boolean, facebookId:number) {
        this.id = id;
        this.fullName = fullName;
        this.pseudonym = pseudonym;
        this.email = email;
        this.role = role;
        this.isActive = isActive;
        this.facebookId = facebookId;
    }


    get id():number {
        return this.id;
    }

    set id(value:number) {
        this.id = value;
    }

    get fullName():string {
        return this.fullName;
    }

    set fullName(value:string) {
        this.fullName = value;
    }

    get pseudonym():string {
        return this.pseudonym;
    }

    set pseudonym(value:string) {
        this.pseudonym = value;
    }

    get facebookId():number {
        return this.facebookId;
    }

    set facebookId(value:number) {
        this.facebookId = value;
    }

    get email():string {
        return this.email;
    }

    set email(value:string) {
        this.email = value;
    }
    
    get role():string {
        return this.role;
    }

    set role(value:string) {
        this.role = value;
    }

    get isActive():boolean {
        return this.isActive;
    }

    set isActive(value:boolean) {
        this.isActive = value;
    }
}