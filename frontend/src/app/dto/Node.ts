export default class Node {
  private id: number;
  private schemeId: number;
  private xCoordinate: number;
  private yCoordinate: number;

  getId():number{
      return this.id;
      }

  setId(value:number){
      this.id=value;
      }
  getSchemeId():number{
      return this.schemeId;
      }

  setSchemeId(value:number){
      this.schemeId=value;
      }

  getXCoordinate():number{
      return this.xCoordinate;
      }

  setXCoordinate(value:number){
      this.xCoordinate=value;
      }

  getYCoordinate():number{
      return this.yCoordinate;
      }

  setYCoordinate(value:number){
      this.yCoordinate=value;
      }
}
