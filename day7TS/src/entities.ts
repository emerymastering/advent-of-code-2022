// to describe a tree nodes, all have names and parents apart from root
export class Node {
  name: string;
  parent: FolderNode | null;

  // this. needed to aceess class variable coz we have local variable with same name
  constructor(name: string, parent: FolderNode | null) {
    this.name = name;
    this.parent = parent;
  }
}

// describing folder node, which extends base class
export class FolderNode extends Node {
  nodes: Node[];

  constructor(name: string, parent: FolderNode | null, nodes: Node[]) {
    super(name, parent);
    this.nodes = nodes;
  }
}

export class FileNode extends Node {
  size: number;

  constructor(name: string, parent: FolderNode | null, size: number) {
    super(name, parent);
    this.size = size;
  }
}
