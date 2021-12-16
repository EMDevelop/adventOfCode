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

  compareDepths(data) {
    const depthsArray = data ? data : this.loadData();
    let numberOfIncreases = 0;
    for (let i = 0; i < depthsArray.length - 1; i++) {
      if (parseInt(depthsArray[i]) < parseInt(depthsArray[i + 1])) {
        numberOfIncreases++;
      }
    }
    return numberOfIncreases;
  }

  sumThreeElements() {
    const depthsArray = this.loadData();
    let sumOfThreeValues = [];
    for (let i = 0; i < depthsArray.length - 2; i++) {
      sumOfThreeValues.push(
        parseInt(depthsArray[i]) +
          parseInt(depthsArray[i + 1]) +
          parseInt(depthsArray[i + 2])
      );
    }
    return this.compareDepths(sumOfThreeValues);
  }
}

module.exports = Sonar;
