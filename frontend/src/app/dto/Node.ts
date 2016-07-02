export default class Node {
  private _id: number;
  private _xCoordinate: number;
  private _yCoordinate: number;

  get id():number{
      return this._id;
      }

  set id(value:number){
      this._id=value;
      }

  get xCoordinate():number{
      return this._xCoordinate;
      }

  set xCoordinate(value:number){
      this._xCoordinate=value;
      }

  get yCoordinate():number{
      return this._yCoordinate;
      }

  set yCoordinate(value:number){
      this._yCoordinate=value;
      }
}
