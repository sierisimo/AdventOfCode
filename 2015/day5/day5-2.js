var input = require('fs').readFileSync('./data-2.in', {
    encoding: 'utf8'
  }),
  niceCount = 0,
  pair, hasPair,
  menageATrois,
  word;

input = input.split('\n');
input.pop();

for (var i = 0; i < input.length; i++) {
  word = input[i];

  hasPair = false;

  menageATrois = false;

  for (var j = 0; j < word.length - 1; j++) {
    pair = word[j] + word[j + 1];

    if (word.split(pair).length >= 3) {
      hasPair = true;
      break;
    }
  }

  if(!hasPair) continue;

  for(var k = 0; k < word.length - 2; k++){
    menageATrois = word[k] === word[k + 2];
    if(menageATrois) break;
  }

  if(!menageATrois) continue;

  niceCount++;
}

console.log(niceCount);
