import { Node } from './node.js';

export class Tree {
  constructor(dataArray) {
    this.root = null;
    this.dataArray = dataArray;
  }

  removeDuplicatesDuplicates() {
    this.dataArray = [...new Set(this.dataArray)];
  }

  sort() {
    this.dataArray.sort((a, b) => a - b);
  }

  displayArray() {
    console.log(this.dataArray);
  }

  buildTree(dataArray) {
    this.removeDuplicates();
    this.sort();
  }
}
