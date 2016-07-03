import Line from "../dto/Line";
export class LineService {
  
  public getLinesFromJson(data: any): Array<Line> {
    let lines: Array<Line> = [];
    for(var i in data) {
      lines.push(this.getLineFromJson(data[i]))
    }
    return lines;
    
  }
  
  public getLineFromJson(data:any): Line {
    let line = new Line();
    line.setId(data.id);
    line.setXBeginCoordinate(data.xBeginCoordinate);
    line.setYBeginCoordinate(data.yBeginCoordinate);
    line.setXEndCoordinate(data.xEndCoordinate);
    line.setYEndCoordinate(data.yEndCoordinate);
    return line;   
  }
}
