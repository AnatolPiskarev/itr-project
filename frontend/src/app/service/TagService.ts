import Tag from "../dto/Tag";
export class TagService {
  
  
  public getTagsfromJson(data:any):Array<Tag> {
    let tags:Array<Tag> = [];
    for (var i in data) {
      let tag:Tag = new Tag(data[i].id, data[i].name);
      tags.push(tag);
    }
    return tags;

  }
}
