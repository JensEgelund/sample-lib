// Importing modules
//let Layer = require('./Layer').Layer;

// Exporting the function
export class Model {
  currentId = Math.random();

  constructor(numberOfLayers) {
    this.numberOfLayers = numberOfLayers;
  }

  whoAreYou(inputArray) {
    console.log("I am MLPv1");
  }
}
