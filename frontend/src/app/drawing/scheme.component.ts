import "rxjs/add/operator/map";
import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {Http,  Headers, RequestOptions} from "@angular/http";

import * as d3 from 'd3';
import {Element} from "../dto/Element";
import drag = d3.behavior.drag;
import rotation = d3.geo.rotation;
import ElementCoordinates from "../dto/ElementCoordinates";
import Line from "../dto/Line";
import Scheme from "../dto/Scheme";
import {saveSchemeComponent} from "./saveScheme.component";
import Node from "../dto/Node";
import Tag from "../dto/Tag";
@Component({
    selector: 'scheme',
    template: require('./scheme.component.html'),
    styles: [require('./scheme.component.scss')],
    directives: [saveSchemeComponent]
})
export class SchemeComponent implements AfterViewInit {
 private showSavePage: boolean = false;
 private showCanvas: boolean = true;
  private width: number = 1000;
  private height: number = 490;
  private startX = 900;
  private startY = 20;
  private elements:Array<Element> = [];
  private elementPath:Array<string> = [];
  private svg;
  private  elementOut: Array<string> = [];
  private xPos: number = 0;
  private yPos: number = 0;
  private currentElement: any;
  private currentLine: any;
  private currentNode: any;
  private elementId = 0;
  private lineId = 0;
  private nodeId = 0;
  private nodeId = 0;
  private workPanel: string;
   constructor(private http:Http) {
    this.getElements();
  }

  ngAfterViewInit() {
    let base = d3.select("#vis");

    this.svg = base.append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "background: linear-gradient(mediumvioletred, transparent 1px),  " +
        "linear-gradient(90deg, mediumvioletred, transparent 1px);" +
        "background-size: 10px 10px; background-position: center center; border: 2px solid mediumvioletred;");
  }

  public showElements() {
    if(this.workPanel=="elements")
      this.workPanel = "";
    else this.workPanel = "elements";
  }
  public showInstruments() {
    if(this.workPanel=="instruments")
      this.workPanel = "";
    else this.workPanel = "instruments";
  }

  public getElementByName(name: string): Element {
    for(var i in this.elements) {
      if(this.elements[i].name == name){
        return this.elements[i];
      }
    }
  }

  public save() {
      this.showSavePage = true;
      this.showCanvas = false;
  }

  public getNodesFromScheme(): Array<Node> {
    let nodes: Array<Node> = []
    let nodeList:Array<any> = this.svg.selectAll(".node").data();
    for(var i in nodeList) {
      let node: Node = new Node();
      node.xCoordinate = nodeList[i].x;
      node.yCoordinate = nodeList[i].y;
    }
    return nodes;
  }

  public getLinesFromScheme(): Array<Line> {
    let lines:  Array<Line> = [];
    let lineList:Array<any> = this.svg.selectAll(".line").data();
    for(var i in lineList) {
      let line: Line = new Line();
      line.xBeginCoordinate = lineList[i].startX;
      line.yBeginCoordinate = lineList[i].startY;
      line.xEndCoordinate = lineList[i].endX;
      line.yEndCoordinate = lineList[i].endY;
      lines.push(line);
    }

    return lines;

  }

  public getElementsFromScheme(): Array<ElementCoordinates> {
    let elements: Array<ElementCoordinates> =[];
    let elementList:Array<any> = this.svg.selectAll(".element").data();
    for(var i in elementList) {
      let element:ElementCoordinates = new ElementCoordinates();
      element.rotation = elementList[i].rotation;
      element.xCoordinate = elementList[i].x;
      element.yCoordinate = elementList[i].y;
      element.element = this.getElementByName(elementList[i].class +".png");
      elements.push(element);
    }
    return elements;
  }

  public loadElement(path: string) {
    this.workPanel = "instruments";
    this.createBoard();
    this.disableSvgClick();
    let rotationCounter: number = 0;
    var image =  this.svg.append("g")
      .data([ {"x":0, "y":0, "class":this.getElementName(path),"path": path,
        "rotation":"left", "rotatable": true, "draggable": false, }])
      .attr("x",0)
      .attr("y",0)
      .attr("transform","translate(0,0)")
      .attr("id", "tempElement")
      .append("image")
      .attr("x", this.startX)
      .attr("y", this.startY)
      .attr("height", "80px")
      .attr("width", "80px")
      .attr("xlink:href", path)
      .on("click", (d,i) => {
        if(d.rotatable) {
          let x:number = this.startX + d.x + 40;
          let y:number = this.startY + d.y + 40;
          rotationCounter++;
          image
            .attr("transform", "rotate(" + rotationCounter * 90 % 360 + "," + x + "," + y + ")");
          if(rotationCounter>3) {
            d.rotation = "left";
            rotationCounter = 0;
          }
        }
        else {
          image.remove();
          this.createElement(path, rotationCounter);
        }
      })
    image.attr("transform", function(d) {
      return "translate(" + [d.x, d.y] + ")";
    });
  }

  public createElement(path: string, rotationCounter:number) {
    this.elementId++
    var drag = this.dragElements();
    let x:number = this.startX  + 40;
    let y:number = this.startY +  40;
    var image =  this.svg.append("g")
      .data([ {"x":0, "y":0, "class":this.getElementName(path),"path": path, "rotation":this.signRotation(rotationCounter), "id" : "element" + this.elementId}])
      .attr("x",0)
      .attr("y",0)
      .attr("transform","translate(0,0)")
      .attr("transform", "rotate(" + rotationCounter * 90 % 360 + "," + x + "," + y + ")")
      .attr("id", "element" + this.elementId)
      .attr("class", "element " + this.getElementName(path))
      .append("image")
      .attr("x", this.startX)
      .attr("y", this.startY)
      .attr("height", "80px")
      .attr("width", "80px")
      .attr("xlink:href", path)
      .on("click", (d, i) => {
        this.currentElement = d;
      })
      .call(drag);

    image.attr("transform", function(d) {
      return "translate(" + [d.x, d.y] + ")";
    });
  }

  public drawNode() {
    this.svg
      .on("click", (d, i) => {
        //noinspection TypeScriptUnresolvedVariable
        let x = d3.mouse(d3.event.currentTarget)[0];
        //noinspection TypeScriptUnresolvedVariable
        let y = d3.mouse(d3.event.currentTarget)[1];
        this.createNode(x,y);
        this.disableSvgClick();
      });

  }
  public createNode(cx, cy) {
      this.nodeId++;
     var node =  this.svg.append("circle")
        .data([ { "id":"node"+this.nodeId, "class": "node", "x": cx, "y": cy}])
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", 5)
        .attr("id","node"+this.nodeId)
        .attr("class", "node")
        .on("click", (d,i) => {
          this.currentNode = d;
        })
        .on("mouseover", (d,i) => {
          node
            .attr("r", 8)
        })
        .on("mouseout", (d,i) => {
          node
            .attr("r", 5)
        });
  }
  public  drawLine() {
    this.currentElement=null;
    this.currentLine=null;
    this.currentNode=null;
   let  coords: Array<number> = [];
   this.svg.on("click", (d,i) => {
          //noinspection TypeScriptUnresolvedVariable
          this.xPos = d3.mouse(d3.event.currentTarget)[0];
          //noinspection TypeScriptUnresolvedVariable
          this.yPos =  d3.mouse(d3.event.currentTarget)[1];
           var element = this.currentElement;
           if(element==null) element = this.currentLine;
           if(element==null) element = this.currentNode;
        let elementCoords:Array<number> =this.getLineEndCoordinates(element);
        //noinspection TypeScriptUnresolvedVariable
       coords.push(elementCoords[0], elementCoords[1]);
        if(coords.length==4) {
          this.checkLineCoords(coords)
          coords = [];
          this.elementOut = [];
          this.disableSvgClick();
        }
     this.currentElement=null;
     this.currentLine=null;
          });
  }
  public subscribeElements(data:any) {
    let elements:Array<Element> = [];
    for (var i in data) {
      let element:Element = new Element(data[i].id, data[i].name);
      elements.push(element);
      this.elementPath.push("/images/"+element.name);
    }
    return elements;
  }
  public enableDragEvent() {
    if( d3.selectAll(".board").empty()==false) {
      d3.selectAll("#tempElement")
        .on("mouseover", (d, i) => {
          d.rotatable = false;
          d3.selectAll(".board")
            .style("stroke", "black")  // colour the line
            .style("stroke-width", 6)
            .style("stroke-dasharray", ("8, 8"));
        });
    }
    else {
      this.disableSvgClick();
    }
  }
  public disableSvgClick() {
    this.svg.on("click", (d,i) => {});
  }

public dragElements():any {
  var drag = d3.behavior.drag()
    .on("dragstart", (d, i) => {
      if( d3.selectAll(".board").empty()==false) {
        this.removeBoard();
      }

    }) //-when you first click
    .on("drag", dragmove) //-when you're dragging
    .on("dragend", (d, i) => {
    });

  function dragmove(d, i) //-updates the co-ordinates
  {
    // noinspection TypeScriptUnresolvedVariable
    d.x += d3.event.dx;
    //noinspection TypeScriptUnresolvedVariable
    d.y += d3.event.dy;
    d3.select(this).attr("transform", function(d,i)
    {
      return "translate(" + [ d.x, d.y ] + ")";
    });
  }
  return drag;

}

  public signRotation(counter): string {
    if (counter == 0) return "left";
    else if (counter == 1) return "down";
    else if (counter == 2) return "right";
    else if (counter == 3) return "up";
  }
  public checkLineCoords(coords) {

    if (this.elementOut[0] == this.elementOut[1] && this.elementOut[0] == "left" ||
      this.elementOut[0] == this.elementOut[1] && this.elementOut[0] == "right") {
      this.createVerticalLineBetweenOuts(coords)
    }
    else if (this.elementOut[0] == this.elementOut[1] && this.elementOut[0] == "up" ||
      this.elementOut[0] == this.elementOut[1] && this.elementOut[0] == "down") {
      this.createHorizontalLineBetweenOuts(coords)
    }
    else if (this.elementOut[0] == "left" && this.elementOut[1] == "right" ||
      this.elementOut[0] == "right" && this.elementOut[1] == "left") {
      this.createLineWithOffsetY(coords);
    }
    else if (this.elementOut[0] == "down" && this.elementOut[1] == "up" ||
      this.elementOut[0] == "up" && this.elementOut[1] == "down") {
      this.createLineWithOffsetX(coords)
    }
    else if (this.elementOut[0] == "down" || this.elementOut[0] == "up") {
      if (this.elementOut[1] == "left" || this.elementOut[1] == "right") {
        this.createCornerLine(coords);
      }
    }
    else if (this.elementOut[0] == "left" || this.elementOut[0] == "right") {
      if (this.elementOut[1] == "down" || this.elementOut[1] == "up") {
        coords = this.replaceCoords(coords);
        this.createCornerLine(coords);
      }
    }
    if (this.elementOut[0] == "node" || this.elementOut[1] == "node") {
        if (this.elementOut[0] == "node") {
          this.replaceCoords(coords);
        }
        if (Math.abs(coords[0] - coords[2]) > Math.abs(coords[1] - coords[3])) {
          coords[3] = coords[1]
        }
        else if (Math.abs(coords[0] - coords[2]) < Math.abs(coords[1] - coords[3])) {
          coords[2] = coords[0]
        }
        this.createLineToNode(coords)
      }
      else this.createLine(coords);

  }
  public createLineToNode(coords) {
    this.svg.select("#"+this.currentNode.id).remove();
    this.createLine(coords);
    this.createNode(coords[2], coords[3])
  }
  public replaceCoords(coords: Array<number>): Array<number> {
    let endX = coords[2];
    let endY = coords[3];
    coords[2] = coords[0];
    coords[3] =  coords[1];
    coords[0] =  endX;
    coords[1] = endY;
    return coords;
  }
  public createCornerLine(coords) {
    let startX = coords[0];
    let startY = coords[1]
    let endX = coords[2];
    let endY = coords[3];
    coords[2]=startX;
    this.createLine(coords);
    coords[1]=endY;
    coords[2] = endX;
    this.createLine(coords);
  }
   public createLineWithOffsetX(coords) {
     let endX = coords[2];
     let endY = coords[3];
       coords[3] = coords[1] + ((coords[3] - coords[1]) / 2);
       coords[2] = coords[0];
       this.createLine(coords);
       coords[0] = coords[2];
       coords[1] = coords[3];
       coords[2] = endX;
       this.createLine(coords);
       coords[0] = coords[2];
       coords[1] = coords[3];
       coords[3] = endY;
       this.createLine(coords);
   }
  public createHorizontalLineBetweenOuts(coords) {
    let offset: number;
    if(this.elementOut[0] =="up") {
      if(coords[1] > coords[3]) {
      coords =  this.replaceCoords(coords);
      }
      offset = -20;
    } else
    if(this.elementOut[0] =="down") {
      if(coords[1] < coords[3]) {
      coords =  this.replaceCoords(coords);
      }
      offset = 20;
    }
    let startX = coords[0];
    let startY = coords[1]
    let endX = coords[2];
    let endY = coords[3];
    coords[0] = startX;
    coords[1] = startY;
    coords[2] = coords[0];
    coords[3] = coords[1] + offset;
    this.createLine(coords);
    coords[1] = coords[3];
    coords[2] = endX;
    this.createLine(coords);
    coords[0] = coords[2];
    coords[3] = endY;
    this.createLine(coords);
  }
  public createVerticalLineBetweenOuts(coords) {
    let startX = coords[0];
    let startY = coords[1]
    let endX = coords[2];
    let endY = coords[3];
    let offset: number;
    if(this.elementOut[0] =="right") {
      if(coords[0]<coords[2]) {
        endX = coords[0];
        endY =  coords[1];
        startX =  coords[2];
        startY = coords[3];
      }
      offset = 20;
    } else
      if(this.elementOut[0] =="left") {
        if(coords[0]>coords[2]) {
          endX = coords[0];
          endY =  coords[1];
          startX =  coords[2];
          startY = coords[3];
        }
        offset = -20;
      }
    coords[0] = startX;
    coords[1] = startY;
    coords[2] = coords[0] + offset;
    coords[3] = coords[1];
    this.createLine(coords);
    coords[0] = coords[2];
    coords[3] = endY;
    this.createLine(coords);
    coords[1] = coords[3];
    coords[2] = endX;
    this.createLine(coords);
  }
  public createLineWithOffsetY(coords) {
    let endX = coords[2];
    let endY = coords[3]
    coords[3] = coords[1];
    coords[2] = coords[0]+ ((coords[2] - coords[0])/2);
    this.createLine(coords);
    coords[0] = coords[2];
    coords[1] = coords[3];
    coords[3] = endY;
    this.createLine(coords);
    coords[0] =coords[2];
    coords[1] = coords[3];
    coords[2] = endX;
    this.createLine(coords);
  }

  public createBoard() {
    this.svg.append("line")
      .style("stroke", "black")  // colour the line
      .style("stroke-width", 4)
      .style("stroke-dasharray", ("3, 3"))
      .attr("id", "board")
      .attr("class", "board")
      .attr("x1", 880)     // x position of the first end of the line
      .attr("y1", 0)      // y position of the first end of the line
      .attr("x2", 880)
      .attr("y2", 120);
    this.svg.append("line")
      .style("stroke", "black")  // colour the line
      .style("stroke-width", 4)
      .style("stroke-dasharray", ("3, 3"))
      .attr("id", "board")
      .attr("class", "board")
      .attr("x1", 880)     // x position of the first end of the line
      .attr("y1", 120)      // y position of the first end of the line
      .attr("x2", 1000)     // x position of the second end of the line
      .attr("y2", 120);

  }
public createLine(coords:Array<number>) {
  this.lineId++
    var line = this.svg.append("line")
        .data([ {"deleted": false, "class": "line", "id":"line"+this.lineId, "startX":coords[0], "startY": coords[1],
                "endX": coords[2], "endY": coords[3]}])
        .style("stroke", "black")  // colour the line
        .style("stroke-width", 3)
        .attr("x1", coords[0])     // x position of the first end of the line
        .attr("y1", coords[1])      // y position of the first end of the line
        .attr("x2", coords[2])     // x position of the second end of the line
        .attr("y2", coords[3])
        .attr("id", "line" + this.lineId)
        .attr("class", "line")
        .on("click", (d,i) => {
          this.currentLine = d;
        })
      .on("mouseover", (d,i) => {
       line
         .style("stroke-width", 5.5)
      })
      .on("mouseout", (d,i) => {
        line
          .style("stroke-width", 2.5)
      });

    }
  public  getElementName(path: string): string {
    let index: number = path.indexOf(".");
    return path.substring(8, index)
}

  public getLineEndCoordinates(element: any):Array<number> {
    let coords: Array<number> =[];
  let imageCenter: number = 39.5;
    if(element.class=="r" || element.class=="c" ||element.class=="l") {
      if(element.rotation=="left") {
        let x:number = this.startX+element.x+imageCenter;
        let y:number = this.startY+element.y+imageCenter;
        if(x>= this.xPos) {
          coords.push(x-30, y);
          this.elementOut.push("left")
        }
        else {
          coords.push(x + 30, y);
          this.elementOut.push("right")
        }
      }
     else if(element.rotation=="right") {
        let x:number = this.startX-element.x+imageCenter;
        let y:number = this.startY-element.y+imageCenter;
        if(x>= this.xPos) {                 //because we rotate element with coordinates
          coords.push(x-30, y);
          this.elementOut.push("left")
        }
        else {
          coords.push(x + 30, y);
          this.elementOut.push("right")
        }
      }
      else if(element.rotation=="down")  {
        let x:number = this.startX-element.y+imageCenter;
        let y:number = this.startY+element.x+imageCenter;
        if(y>= this.yPos) {
          coords.push(x, y -30);
          this.elementOut.push("up")
        } else {
          coords.push(x, y + 30);
          this.elementOut.push("down")
        }
      }
      else if(element.rotation=="up")  {
        let x:number = this.startX+element.y+imageCenter;
        let y:number = this.startY-element.x+imageCenter;
        if(y>= this.yPos) {
          coords.push(x, y -30);
          this.elementOut.push("up")
        } else {
          coords.push(x, y + 30);
          this.elementOut.push("down")
        }
      }
    }
    else if(element.class=="node"){
      coords.push(element.x,element.y);
      this.elementOut.push("node")
    }  else if(element.class=="line"){
      coords.push(this.xPos, this.yPos);
      this.elementOut.push("line")
    }
  return coords;
  }


  public removeBoard() {
  //  this.disableElementClick();
    d3.selectAll(".board").remove();
  }

  public deleteElements() {
    this.currentElement=null;
    this.currentLine=null;
    this.currentNode=null;

    this.svg
      .on("click", (d,i) => {
        this.svg.select("#"+this.currentElement.id).remove();
        this.svg.select("#"+this.currentLine.id).remove();
        this.svg.select("#"+this.currentNode.id).remove();
      })
  }
  public getElements() {
    //noinspection TypeScriptUnresolvedFunction
    this.http.get("/get-elements")
      .map(res => res.json())
      .subscribe((env_data) => {
        this.elements = this.subscribeElements(env_data);
      });
  }
  public  createScheme(scheme: Scheme) {
    scheme.elements = this.getElementsFromScheme()
    scheme.lines = this.getLinesFromScheme();
    // scheme.nodes =this.getNodesFromScheme();
    this.saveScheme(scheme);
  }

  public saveScheme(scheme: Scheme) {
    debugger
   let  tag: Tag = new Tag(1,"hui")
    let saveUrl = "/save-scheme"
    let body = JSON.stringify(tag);
    //noinspection TypeScriptUnresolvedFunction
    this.http.post(saveUrl, body)
      .map(res => res.json())
      .subscribe((env_data) => {
        debugger
        console.log(env_data)
      });
  }
}
