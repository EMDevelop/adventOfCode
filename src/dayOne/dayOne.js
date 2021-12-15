const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, 'data.txt');

class Sonar {
  constructor() {
    this.data = [];
  }

  loadData() {
    const arrayOfDepths = fs.readFileSync(filePath).toString().split('\n');
    return arrayOfDepths;
  }

  compareDepths() {
    const depthsArray = this.loadData();
    // compare values in array on whether they increase
    // if they do, return the number of increases
    // if they don't, return 0
    let numberOfIncreases = 0;
    for (let i = 0; i < depthsArray.length - 1; i++) {
      if (depthsArray[i] < depthsArray[i + 1]) {
        numberOfIncreases++;
      }
    }
    return numberOfIncreases;
  }
}

module.exports = Sonar;
