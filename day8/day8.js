var input = require('fs').readFileSync('./data.in', {
  encoding: 'utf8'
});

var total = 0;

var line;

input = input.split('\n');
input.pop();

while (input.length) {
  line = input.shift();

  total += line.length - eval(line).length;
}

console.log(total);
