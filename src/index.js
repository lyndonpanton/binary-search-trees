// console.log("Webpack configured successfully");

import "./css/styles.css"
// import crow from "./asset/img/crow.jpg"

// const image = document.createElement("img");
// image.classList.add("image", "image-3");
// image.alt = "Crow 3";
// image.src = crow;

// document.getElementsByTagName("body")[0].appendChild(image);

import Tree from "./js/Tree"

let treeOne = new Tree([1, 2, 3, 4, 5, 6, 7]);
let treeTwo = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
let treeThree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let treeFour = new Tree([1, 2, 3]);
let treeFive = new Tree([1, 2]);
let treeSix = new Tree([1]);

console.log(treeOne.root);
