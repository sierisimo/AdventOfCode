var data = require('./data');

function type(obj) {
  var text = obj.constructor.toString()
  return text.match(/function (.*)\(/)[1]
}

function checkAndSum(obj, cont) {
  if (type(obj) === 'Object') {
    for (var b in obj) {
      if(type(obj[b]) === 'String' && obj[b] === 'red')
        return 0;
    }
    
    for (var attr in obj) {
      if (type(obj[attr]) === 'Object' || type(obj[attr]) === 'Array')
        cont += checkAndSum(obj[attr], 0);
      else if (type(obj[attr]) === 'Number')
        cont += obj[attr];
    }
  } else if (type(obj) === 'Array') {
    for (var i = 0; i < obj.length; i++) {
      if (type(obj[i]) === 'Object' || type(obj[i]) === 'Array')
        cont += checkAndSum(obj[i], 0);
      else if (type(obj[i]) === 'Number')
        cont += obj[i];
    }
  }

  return cont;
}

console.log(checkAndSum(data, 0));
