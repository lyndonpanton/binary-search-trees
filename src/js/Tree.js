import Node from "./Node"

class Tree {
    constructor(array) {
        this.root = null;
        this.buildTree(array, this.root);
    }

    buildTree(array, current) {
        // 1. remove duplicates
        // 2. sort array
        // 3. build tree

        if (array.length === 0) return;
        else {
            let leftIndex = 0;
            let rightIndex = array.length - 1;
            let middleIndex = Math.floor((rightIndex - leftIndex) / 2);

            current = new Node(array[middleIndex]);

            let leftHalf = array.slice(leftIndex, middleIndex);
            let rightHalf = array.slice(middleIndex + 1);

            this.buildTree(leftHalf, current.left);
            this.buildTree(rightHalf, current.right);
        }
    }

    delete(value) {
        
    }

    depth(value) {

    }

    find(value) {

    }

    height(value) {

    }

    inOrderForEach(callback) {

    }

    insert(value) {

    }

    isBalanced() {
        
    }

    levelOrderForEach(callback) {

    }

    postOrderForEach(callback) {

    }

    preOrderForEach(callback) {

    }

    prettyPrint() {

    }

    rebalance() {

    }
}

export default Tree;
