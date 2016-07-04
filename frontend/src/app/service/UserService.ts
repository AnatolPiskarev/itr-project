import User from "../dto/User";
export class UserService {

  
  public getUserFromJson(data:any):User {
    let user:User = new User(data.id, data.fullName, data.pseudonym, data.email, data.role,
      data.isActive, data.facebookId);
    return user;
  }
}
