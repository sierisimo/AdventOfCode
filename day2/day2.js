var fs = require('fs');

var data = fs.readFileSync('./data.in', {
  encoding: 'utf8'
});

function workData(data) {
  var arrData = data.toString().split('\n'),
    currentElement, dims, min, total = 0,
    ribbon = 0,
    lw, wh, hl, l, w, h;

  arrData.pop();

  for (var i = 0; i < arrData.length; i++) {
    currentElement = arrData[i];
    dims = currentElement.split('x');

    l = Number.parseInt(dims[0]);
    w = Number.parseInt(dims[1]);
    h = Number.parseInt(dims[2]);

    lw = l * w;
    wh = w * h;
    hl = l * h;

    total += (2 * lw) + (2 * wh) + (2 * hl);

    if (lw <= wh && lw <= hl) {
      total += lw;
    } else if (wh <= lw && wh <= hl) {
      total += wh;
    } else {
      total += hl;
    }

    if (l <= w && l <= h) {
      if (w <= h) {
        ribbon += (l + l + w + w);
      } else {
        ribbon += (l + l + h + h);
      }
    } else if (w <= l && w <= h) {
      if (h <= l) {
        ribbon += (w + w + h + h);
      } else {
        ribbon += (w + w + l + l);
      }
    }else{
      if(w <= l){
        ribbon += (h + h + w + w);
      }else{
        ribbon += (h + h + l + l);
      }
    }
    ribbon += (l * w * h);
  }

  return {
    paper: total,
    ribbon: ribbon
  };
};

console.log(workData(data));
