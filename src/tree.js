import { Node } from './node.js';

export class Tree {
  constructor(dataArray) {
    this.dataArray = dataArray;
    this.removeDuplicates();
    this.sort();
    this.root = this.buildTree(this.dataArray);
  }

  removeDuplicates() {
    this.dataArray = [...new Set(this.dataArray)];
  }

  sort() {
    this.dataArray.sort((a, b) => a - b);
  }

  displayArray() {
    console.log(this.dataArray);
  }

  displayTree() {
    console.log(this.root);
  }

  getRoot() {
    return this.root;
  }

  buildTree(dataArray, start = 0, end = dataArray.length - 1) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);

    let root = new Node(dataArray[mid]);

    root.left = this.buildTree(dataArray, start, mid - 1);
    root.right = this.buildTree(dataArray, mid + 1, end);

    return root;
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insert(value) {
    let traversal = this.root;

    while (true) {
      if (value <= traversal.data) {
        if (traversal.left) {
          traversal = traversal.left;
        } else {
          traversal.left = new Node(value);
          return;
        }
      } else {
        if (traversal.right) {
          traversal = traversal.right;
        } else {
          traversal.right = new Node(value);
          return;
        }
      }
    }
  }

  insertRecursive(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (root.data === value) {
      throw Error('Value already in BST');
    }

    if (value < root.data) {
      root.left = this.insertRecursive(root.left, value);
    } else if (value > root.data) {
      root.right = this.insertRecursive(root.right, value);
    }

    return root;
  }

  deleteItemRec(root, value) {
    if (root === null) {
      console.log(`${value} not found in tree.`);
      return;
    }

    if (root.data === value) {
      // is a leaf node
      if (root.left === null && root.right === null) {
        root = null;
        return root;
        // Only one child to right
      } else if (root.left === null) {
        return root.right;
        // Only one child to left
      } else if (root.right === null) {
        return root.left;
        // Has two children
      } else {
        let traversal = root.right;
        while (traversal.left !== null) {
          traversal = traversal.left;
        }
        root.data = traversal.data;
        root.right = this.deleteItemRec(root.right, traversal.data);

        return root;
      }
    }

    if (value < root.data) {
      root.left = this.deleteItemRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteItemRec(root.right, value);
    }

    return root;
  }

  find(value, root = this.root) {
    if (root === null) {
      return `${value} not found in tree`;
    }

    if (root.data === value) {
      return root;
    }

    if (value < root.data) {
      return this.find(value, root.left);
    } else if (value > root.data) {
      return this.find(value, root.right);
    }
  }
}
