var data = require('fs').readFileSync('./data.in',{encoding:'utf8'});

var nSet = new Set(), house = [0,0];

nSet.add(house.toString());

for(var i = 0; i < data.length; i++){
  if(data[i] === '^'){
    house[1]--;
  }else if(data[i] === 'v'){
    house[1]++;
  }else if(data[i] === '>'){
    house[0]++;
  }else{
    house[0]--;
  }

  nSet.add(house.toString());
}

console.log(nSet.size);
