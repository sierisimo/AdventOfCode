var key = require('fs').readFileSync('./data.in', {
    encoding: 'utf8'
  }),
  crypto = require('crypto'),
  cont = -1,
  currentHash;

key = key.split('\n')[0];

function contZeroes(hash) {
  var chars = hash.split('');

  return chars[0] === '0' && chars[1] === '0' && chars[2] === '0' && chars[3] === '0' && chars[4] === '0' && chars[5] === '0';
}

while (true) {
  currentHash = crypto.createHash('md5').update(key + (++cont)).digest('hex');

  if (contZeroes(currentHash)) break;
}

console.log(cont);
