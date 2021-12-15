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
    return 0;
  }
}

module.exports = Sonar;
