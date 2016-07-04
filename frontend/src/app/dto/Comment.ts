import User from "./User";
import Scheme from "./Scheme";
import {Like} from "./Like";
export class Comment {
  private id: number;
  private user: User;
  private scheme: Scheme;
  private commentary: string;
  private likes: Array<Like>;

  constructor(id:number, user:User, scheme:Scheme, commentary:string, likes:Array<Like>) {
      this.id = id;
      this.user = user;
      this.scheme = scheme;
      this.commentary = commentary;
      this.likes = likes;
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

  getScheme():Scheme{
      return this.scheme;
      }

  setScheme(value:Scheme){
      this.scheme=value;
      }

  getCommentary():string{
      return this.commentary;
      }

  setCommentary(value:string){
      this.commentary=value;
      }

  get likes():Array<Like>{
      return this.likes;
      }

  set likes(value:Array<Like>){
      this.likes=value;
      }
}
