import { Tree } from './tree.js';

let dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(dataArray);

tree.displayArray();
tree.removeDuplicates();
tree.displayArray();
tree.sort();
tree.displayArray();
