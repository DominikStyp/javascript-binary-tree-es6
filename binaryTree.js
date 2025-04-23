export class BinTree {
  constructor() {
    console.log("bin tree init");
  }

  insert(value) {
    if (!this.rootNode) {
      this.rootNode = new BinNode(value);
    } else {
      this.rootNode.insert(value);
    }
  }

  find(value) {
    if (this.rootNode.value === value) {
      return true;
    }

    return this.findInBinNode(value, this.rootNode);
  }

  findInBinNode(value, binNode) {
    if (binNode.value === value) {
      return true;
    }

    if (value < binNode.value && binNode.leftChild) {
      return this.findInBinNode(value, binNode.leftChild);
    }

    if (value > binNode.value && binNode.rightChild) {
      return this.findInBinNode(value, binNode.rightChild);
    }

    return false;
  }

  getInOrder() {
    let rootValue = this.rootNode.value;
    this.resultArr = [];

    this.traverseNodes(this.rootNode);

    return this.resultArr;
  }

  traverseNodes(binNode) {
    if (!binNode) {
      return;
    }

    // first recursively traverse left branches
    this.traverseNodes(binNode.leftChild);

    // push all left childs from bottom to the top
    this.resultArr.push(binNode.value);

    //  recursively traverse right branches
    this.traverseNodes(binNode.rightChild);
  }
}

export class BinNode {
  constructor(value) {
    this.value = value;
  }

  insert(value) {
    if (value > this.value) {
      if (this.rightChild) {
        this.rightChild.insert(value);
      } else {
        this.rightChild = new BinNode(value);
      }
    }

    if (value < this.value) {
      if (this.leftChild) {
        this.leftChild.insert(value);
      } else {
        this.leftChild = new BinNode(value);
      }
    }
  }
}
