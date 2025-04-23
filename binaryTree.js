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
    let leftArr = [];
    let rightArr = [];

    if (this.rootNode.leftChild) {
      // left
      this.getNodesValues(rootValue, this.rootNode.leftChild, leftArr);
    }

    if (this.rootNode.rightChild) {
      // right
      this.getNodesValues(rootValue, this.rootNode.rightChild, rightArr);
    }

    return [...leftArr, rootValue, ...rightArr];
  }

  getNodesValues(compareValue, binNode, arr) {
    if (binNode.value > compareValue) {
      arr.push(binNode.value);
    }

    if (binNode.value < compareValue) {
      arr.unshift(binNode.value);
    }

    if (binNode.leftChild) {
      this.getNodesValues(binNode.value, binNode.leftChild, arr);
    }

    if (binNode.rightChild) {
      this.getNodesValues(binNode.value, binNode.rightChild, arr);
    }
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
