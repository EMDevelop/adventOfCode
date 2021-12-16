const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, 'data.txt');

// Rules
// forward = +1 horizontal
// down = +1 depth
// up = -1 depth

class Submarine {
  constructor() {
    this.horizontalSum = 0;
  }

  loadData() {
    const arrayOfDepths = fs.readFileSync(filePath).toString().split('\n');
    return this._splitData(arrayOfDepths);
  }

  followCommands() {
    const commands = this.loadData();
    this.horizontalSum = parseInt(commands[0][1]) + parseInt(commands[1][1]);
  }

  _splitData(data) {
    console.log(data);
    return data.map((command) => {
      return command.split(' ');
    });
  }
}

module.exports = Submarine;

// const sub = new Submarine();
// console.log(sub.loadData());
