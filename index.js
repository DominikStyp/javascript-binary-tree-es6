import { BinNode, BinTree } from "./binaryTree";

let tree = new BinTree();
tree.insert(7);
tree.insert(8);
tree.insert(2);
tree.insert(10);
tree.insert(11);
tree.insert(4);
tree.insert(1);
tree.insert(5);

let result = JSON.stringify(tree, null, "\t");

result += "\n";
result += "\n\n 3 was " + (tree.find(3) ? "found" : "not found");
result += "\n 4 was " + (tree.find(4) ? "found" : "not found");
result += "\n 1 was " + (tree.find(1) ? "found" : "not found");

result +=
  "\n\n Ordered values : " + JSON.stringify(tree.getInOrder(), null, "\t");

document.getElementById("pre").textContent = result;
