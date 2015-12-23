var input = require('fs').readFileSync('./data.in', 'utf8');

input = input.split('\n');
input.pop();

var map = new Map(),
  matrix = [],
  combinations = [],
  smallest = NaN,
  cont = 0,
  line;

function storInMatrix(dataArr) {
  if (!map.has(dataArr[0])) {
    map.set(dataArr[0], cont++);
  }

  if (!map.has(dataArr[1])) {
    map.set(dataArr[1], cont++);
  }

  if (!matrix[map.get(dataArr[0])])
    matrix[map.get(dataArr[0])] = [];

  if (!matrix[map.get(dataArr[1])])
    matrix[map.get(dataArr[1])] = [];

  matrix[map.get(dataArr[0])][map.get(dataArr[0])] = NaN;
  matrix[map.get(dataArr[1])][map.get(dataArr[1])] = NaN;
  matrix[map.get(dataArr[0])][map.get(dataArr[1])] = Number.parseInt(dataArr[2]);
  matrix[map.get(dataArr[1])][map.get(dataArr[0])] = Number.parseInt(dataArr[2]);
}

function generateCombinations() {
  for(var i = 0; i < map.size; i++){
    for(var j = 0; j < map.size; j += i){

      if(j == 0 && i == 0)
        break;
    }
  }
}

while (input.length) {
  line = input.shift();
  line = line.split(" ");

  line.splice(1, 1);
  line.splice(2, 1);

  storInMatrix(line);
}
