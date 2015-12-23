var data = require('fs').readFileSync('./data-2.in', {
  encoding: 'utf8'
});

var nSet = new Set(),
  santa = [0, 0],
  roboSanta = [0, 0],
  roboTurn = false;

nSet.add(santa.toString());

for (var i = 0; i < data.length; i++) {
  if (data[i] === '^') {
    roboTurn ? roboSanta[1]-- : santa[1]--;
  } else if (data[i] === 'v') {
    roboTurn ? roboSanta[1]++ : santa[1]++;
  } else if (data[i] === '>') {
    roboTurn ? roboSanta[0]++ : santa[0]++;
  } else {
    roboTurn ? roboSanta[0]-- : santa[0]--;
  }

  nSet.add(santa.toString());
  nSet.add(roboSanta.toString());

  roboTurn = !roboTurn;
}

console.log(nSet.size);
