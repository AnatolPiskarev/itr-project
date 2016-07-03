import Scheme from "./Scheme";
export default class Line {
  private id: number;
  private xBeginCoordinate: number;
  private yBeginCoordinate: number;
  private xEndCoordinate: number;
  private yEndCoordinate: number;

  getId():number{
    return this.id;
  }

  setId(value:number){
    this.id=value;
  }

  getXBeginCoordinate():number{
      return this.xBeginCoordinate;
      }

  setXBeginCoordinate(value:number){
      this.xBeginCoordinate=value;
      }

  getYBeginCoordinate():number{
      return this.yBeginCoordinate;
      }

  setYBeginCoordinate(value:number){
      this.yBeginCoordinate=value;
      }

  getXEndCoordinate():number{
      return this.xEndCoordinate;
      }

  setXEndCoordinate(value:number){
      this.xEndCoordinate=value;
      }

  getYEndCoordinate():number{
      return this.yEndCoordinate;
      }

  setYEndCoordinate(value:number){
      this.yEndCoordinate=value;
      }
}
