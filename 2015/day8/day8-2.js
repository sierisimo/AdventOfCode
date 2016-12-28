var input = require('fs').readFileSync('./data-2.in', {
  encoding: 'utf8'
});

var total = 0;

var line;

input = input.split('\n');
input.pop();

while (input.length) {
  line = input.shift();

  total += JSON.stringify(line).length - line.length;
}

console.log(total);
