export default class User {
    private id: number;
    private fullName: string;
    private pseudonym: string;
    private email: string;
    private password: string;
    private role: string;
    private isActive: boolean;
    
    constructor(id:number, fullName:string, pseudonym:string, email:string, password:string, role:string, isActive:boolean) {
        this.id = id;
        this.fullName = fullName;
        this.pseudonym = pseudonym;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isActive = isActive;
    }
}