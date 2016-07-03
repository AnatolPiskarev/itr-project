import SchemeRating from "../dto/SchemeRating";
import Scheme from "../dto/Scheme";
import {Element} from "../dto/Element";
import User from "../dto/User";
import Tag from "../dto/Tag";
import ElementCoordinates from "../dto/ElementCoordinates";
import {UserService} from "./UserService";
import {SchemeRatingService} from "./SchemeRatingService";
import {TagService} from "./TagService";
import {ElementCoordinateService} from "./ElementCoordinateService";
import Line from "../dto/Line";
import {LineService} from "./LineService";
import {NodeService} from "./NodeService";
import Node from "../dto/Node";
export class SchemeService {
  private userService: UserService;
  private schemeRartingService: SchemeRatingService;
  private tagService: TagService;
  private elementCoordinateService: ElementCoordinateService;
  private lineService: LineService;
  private nodeService: NodeService;

  getSchemes(env_data): Array<Scheme> {
    let  schemes: Array<Scheme> = [];
    for (var i in env_data) {
      schemes.push(this.getScheme(env_data[i]));
    }
    return schemes;
  }
  getScheme(env_data): Scheme {
    debugger
    let scheme:Scheme;
      let user:User = this.userService.getUserFromJson(env_data.user);
      let rates:Array<SchemeRating> = this.schemeRartingService.getRatesFromJson(env_data.rates);
      let tags:Array<Tag> = this.tagService.getTagsfromJson(env_data.tags);
      let elements: Array<ElementCoordinates> = this.elementCoordinateService.getElementCoordinatesFromJson(env_data.elements);
      let lines: Array<Line> = this.lineService.getLinesFromJson(env_data.lines);
      let nodes: Array<Node> = this.nodeService.getNodesFromJson(env_data.nodes);

      scheme: Scheme = new Scheme(env_data.id, user, env_data.name, env_data.description,
        env_data.category, env_data.creationDate, rates, elements, tags, lines, nodes);
    return scheme;
  }





  getSchemeCurrentRate(scheme:Scheme): number {
    let rates: Array<SchemeRating> = scheme.getRates();

    let rate: number  = 0;
    for(var i in rates)
    {
      rate += rates[i].getValue();
    }
    return( rate/rates.length);
  }
}
