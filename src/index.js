import { Tree } from './tree.js';

let dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(dataArray);

console.log(tree.isBalanced());

// tree.insertRecursive(120);
// tree.insertRecursive(130);
// tree.insertRecursive(140);
// console.log(tree.find(11));
// tree.prettyPrint(tree.getRoot());

// const foundNode = tree.find(9);
// console.log(tree.height(foundNode));
// console.log(tree.depth(foundNode));

tree.insertRecursive(111);
tree.insertRecursive(112);
tree.insertRecursive(113);
tree.insertRecursive(114);
tree.insertRecursive(115);

tree.prettyPrint(tree.getRoot());

console.log(tree.isBalanced());

tree.rebalance();
console.log(tree.isBalanced());

tree.prettyPrint(tree.getRoot());
console.log('Level Order:');
tree.levelOrderRec(tree.printNode);

tree.prettyPrint(tree.getRoot());
console.log('Pre Order:');
tree.preOrderRec(tree.printNode);

tree.prettyPrint(tree.getRoot());
console.log('In Order:');
tree.inOrderRec(tree.printNode);

tree.prettyPrint(tree.getRoot());
console.log('Post Order:');
tree.postOrderRec(tree.printNode);
