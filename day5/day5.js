var input = require('fs').readFileSync('./data.in', {
    encoding: 'utf8'
  }),
  niceCount = 0,
  vowelsCount = 0,
  vowels = 'aeiou',
  alphabet = 'abcdefghijklmnopqrstuvwxyz',
  rejectedWord = ['ab', 'cd', 'pq', 'xy'],
  hasDouble,
  word;

input = input.split('\n');
input.pop();

for (var i = 0; i < input.length; i++) {
  word = input[i];
  vowelsCount = 0;

  hasDouble = false;

  if (word.includes(rejectedWord[0]) || word.includes(rejectedWord[1]) || word.includes(rejectedWord[2]) || word.includes(rejectedWord[3])) continue;

  for (var j = 0; j < vowels.length; j++) {
    vowelsCount += word.split(vowels[j]).length - 1;
    if (vowelsCount >= 3) break;
  }

  if (vowelsCount < 3) continue;

  for (var k = 0; k < alphabet.length; k++) {
    if (word.includes(alphabet[k] + alphabet[k])) {
      hasDouble = true;
      break;
    }
  }

  if (!hasDouble) continue;

  niceCount++;
}

console.log(niceCount);
