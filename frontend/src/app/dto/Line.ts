import Scheme from "./Scheme";
export default class Line {
  private _scheme:Scheme;
  private _id: number;
  private _xBeginCoordinate: number;
  private _yBeginCoordinate: number;
  private _xEndCoordinate: number;
  private _yEndCoordinate: number;
  
  get id():number{
    return this._id;
  }

  set id(value:number){
    this._id=value;
  }

  get scheme():Scheme{
      return this._scheme;
      }

  set scheme(value:Scheme){
      this._scheme=value;
      }

  get xBeginCoordinate():number{
      return this._xBeginCoordinate;
      }

  set xBeginCoordinate(value:number){
      this._xBeginCoordinate=value;
      }

  get yBeginCoordinate():number{
      return this._yBeginCoordinate;
      }

  set yBeginCoordinate(value:number){
      this._yBeginCoordinate=value;
      }

  get xEndCoordinate():number{
      return this._xEndCoordinate;
      }

  set xEndCoordinate(value:number){
      this._xEndCoordinate=value;
      }

  get yEndCoordinate():number{
      return this._yEndCoordinate;
      }

  set yEndCoordinate(value:number){
      this._yEndCoordinate=value;
      }
}
