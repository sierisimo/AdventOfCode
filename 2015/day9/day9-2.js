var input = require('fs').readFileSync('./data.in', 'utf8');

input = input.split('\n');
input.pop();

var map = new Map(),
  matrix = [],
  combinations = [],
  usedNumbers = [],
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

function permute(elems) {
  var num;
  for (var i = 0; i < elems.length; i++) {
    num = elems.splice(i, 1)[0];
    usedNumbers.push(num);
    if (elems.length == 0) {
      combinations.push(usedNumbers.slice());
    }
    permute(elems);
    elems.splice(i, 0, num);
    usedNumbers.pop();
  }
}

while (input.length) {
  line = input.shift();
  line = line.split(" ");

  line.splice(1, 1);
  line.splice(2, 1);

  storInMatrix(line);
}

var base = [];

for (var i = 0; i < map.size; i++) {
  base[i] = i;
}

permute(base);

var sum;

for (var i = 0; i < combinations.length; i++) {
  sum = 0;
  for (var j = 0; j < combinations[i].length - 1; j++) {
    sum += matrix[combinations[i][j]][combinations[i][j + 1]];
  }
  if (isNaN(smallest))
    smallest = sum;
  else if (sum > smallest)
    smallest = sum;
}

console.log(smallest);
