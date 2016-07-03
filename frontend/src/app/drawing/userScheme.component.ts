import "rxjs/add/operator/map";
import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {Http,  Headers, RequestOptions} from "@angular/http";
import { ActivatedRoute, Router }       from '@angular/router';

import * as d3 from 'd3';
import {Element} from "../dto/Element";
import drag = d3.behavior.drag;
import rotation = d3.geo.rotation;
import ElementCoordinates from "../dto/ElementCoordinates";
import Line from "../dto/Line";
import Scheme from "../dto/Scheme";
import {saveSchemeComponent} from "./saveScheme.component";
import User from "../dto/User";


@Component({
  selector: 'scheme',
  template: require('./scheme.component.html'),
  styles: [require('./scheme.component.scss')],
  directives: [saveSchemeComponent]
})


export class UserSchemeComponent implements AfterViewInit {
  private showSavePage: boolean = false;
  private showCanvas: boolean = true;
  private width: number = 1000;
  private height: number = 490;
  private startX = 900;
  private startY = 20;
  private elements:Array<Element> = [];
  private elementPath:Array<string> = [];
  private svg;
  private elementId = 0;
  private lineId = 0;
  private nodeId = 0;
  private nodeId = 0;
  private workPanel: string;
  constructor(private http:Http,   private route: ActivatedRoute,
   private router: Router) {
    this.getElements();
  }

  ngAfterViewInit() {
    let base = d3.select("#vis");
    this.svg = base.append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "background: linear-gradient(black, transparent 1px),  " +
        "linear-gradient(90deg, black, transparent 1px);" +
        "background-size: 10px 10px; background-position: center center; border: 2px solid black;");
    let scheme: Scheme;
    let user: User;
    if(this.router.url != "/draw-scheme") {
       let sub = this.route.params.subscribe(params => {
         //TODO
         // let user = this.getUserByPseudonym(params['user']); // (+) converts string 'id' to a number
         // scheme = this.getSchemeById(+params['scheme']); // (+) converts string 'id' to a number
       });
    }
  }

  public showUserScheme(scheme: Scheme) {
    debugger
    let elements: Array<ElementCoordinates> = scheme.getElements();
    let lines: Array<Line> = scheme.getLines();
    for(var i in elements) {
      let path: string = "/images/r.png";
      let position: number = this.getRotation(elements[i].getRotation())
      let x = elements[i].getXCoordinate();
      let y = elements[i].getYCoordinate();
      this.createElement(path, position, x, y);
    }
    for(var i  in lines) {
      let coords: Array<number> =[lines[i].getXBeginCoordinate(), lines[i].getYBeginCoordinate(),
        lines[i].getXEndCoordinate(), lines[i].getYEndCoordinate()];
      this.createLine(coords);
    }
  }
  public getElements() {
    //noinspection TypeScriptUnresolvedFunction
    this.http.get("/get-elements")
      .map(res => res.json())
      .subscribe((env_data) => {
        this.elements = this.subscribeElements(env_data);
      });
  }
  public getElementByName(name: string): Element {
    for(var i in this.elements) {
      if(this.elements[i].getName() == name){
        return this.elements[i];
      }
    }
  }

  public createElement(path: string, rotationCounter:number, dx, dy) {
    this.elementId++
    let x:number = this.startX  + 40;
    let y:number = this.startY +  40;
    var image =  this.svg.append("g")
      .data([ {"x":dx, "y":dy, "class":this.getElementName(path),"path": path, "rotation":this.signRotation(rotationCounter), "id" : "element" + this.elementId}])
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
    image.attr("transform", function(d) {
      return "translate(" + [d.x, d.y] + ")";
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
  }

  public subscribeElements(data:any) {
    let elements:Array<Element> = [];
    for (var i in data) {
      let element:Element = new Element(data[i].id, data[i].name);
      elements.push(element);
      this.elementPath.push("/images/"+element.getName());
    }
    return elements;
  }


  public signRotation(counter: number): string {
    if (counter == 0) return "left";
    else if (counter == 1) return "down";
    else if (counter == 2) return "right";
    else if (counter == 3) return "up";
  }
  public getRotation(counter: string): number {
    if (counter == "left") return 0;
    else if (counter == "down") return 1;
    else if (counter == "right") return 2;
    else if (counter == "up") return 3;
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
  }
  public  getElementName(path: string): string {
    let index: number = path.indexOf(".");
    return path.substring(8, index)
  }
}
