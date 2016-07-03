import Node from "../dto/Node";
export class NodeService {

  public getNodesFromJson(data: any): Array<Node> {
    let nodes: Array<Node> = [];
    for(var i in data) {
      nodes.push(this.getNodeFromJson(data[i]));
    }
    return nodes;
}

  public getNodeFromJson(data: any): Node {
    let node: Node = new Node();
    node.setId(data.id);
    node.setSchemeId(data.schemeId);
    node.setXCoordinate(data.xCoordinate);
    node.setYCoordinate(data.yCoordinate);
    return node;
  }
}
