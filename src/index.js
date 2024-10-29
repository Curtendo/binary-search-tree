import { Tree } from './tree.js';

let dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(dataArray);

// tree.insertRecursive(tree.root, 111);
console.log(tree.find(11));
tree.prettyPrint(tree.getRoot()); 