var input = require('fs').readFileSync('./data.in', {
    encoding: 'utf8'
  }),
  lights = [],
  turnOnStr = 'turn on ',
  turnOffStr = 'turn off ',
  toogle = 'toggle ',
  instruction;

input = input.split('\n');
input.pop();

function getRange(str) {
  var splitted = str.split(' through '),
    start = splitted[0].split(','),
    end = splitted[1].split(',');

  start[0] = Number.parseInt(start[0]);
  start[1] = Number.parseInt(start[1]);

  end[0] = Number.parseInt(end[0]);
  end[1] = Number.parseInt(end[1]);

  return {
    start: start,
    end: end
  };
}

function turn(range, mode) {
  for (var i = range.start[0]; i <= range.end[0]; i++) {
    for (var j = range.start[1]; j <= range.end[1]; j++) {
      lights[i][j] = mode;
    }
  }
}

function toogleThem(range) {
  for (var i = range.start[0]; i <= range.end[0]; i++) {
    for (var j = range.start[1]; j <= range.end[1]; j++) {
      lights[i][j] = !lights[i][j];
    }
  }
}

for (var i = 0; i < 1000; i++) {
  lights[i] = [];
  for (var j = 0; j < 1000; j++) {
    lights[i][j] = false;
  }
}

for (var i = 0; i < input.length; i++) {
  instruction = input[i];

  if (instruction.includes(turnOnStr)) {
    turn(getRange(instruction.substring(turnOnStr.length)), true);
  } else if (instruction.includes(turnOffStr)) {
    turn(getRange(instruction.substring(turnOffStr.length)), false);
  } else {
    toogleThem(getRange(instruction.substring(toogle.length)));
  }
}

var total = lights.reduce(function(prev, curr, indx, arr){
  var pseudo = lights[indx].reduce(function(p, c, ind, ar){
    if(c) return p + 1;
    else return p;
  }, 0);
  return prev + pseudo;
}, 0);

console.log(total);
