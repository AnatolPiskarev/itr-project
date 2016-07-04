export class Like {
  private id: number;
  private isLike: boolean;
  private userId: number;
  private schemeId: number;

  constructor(id:number, isLike:boolean, userId:number, schemeId:number) {
      this.id = id;
      this.isLike = isLike;
      this.userId = userId;
      this.schemeId = schemeId;
      }
}
