  var input = require('fs').readFileSync('./data.in', {
    encoding: 'utf8'
  });
  var instructions = input.split('\n'),
    index = 0,
    wires = new Map(),
    parts, val;

  instructions.pop();

  function checkInstruction(partsArr) {
    var vals = [Number.parseInt(partsArr[0]), Number.parseInt(partsArr[1]), Number.parseInt(partsArr[2])];

    switch (partsArr.length) {
      case 3:
        if (wires.has(partsArr[0])) {
          wires.set(partsArr[2], wires.get(partsArr[0]));

          return true;
        }
      case 4:
        if (isNaN(vals[1])) {
          if (wires.has(partsArr[1])) {
            wires.set(partsArr[3], complement(wires.get(partsArr[1])));

            return true;
          }
        } else {
          wires.set(partsArr[3], complement(vals[1]));

          return true;
        }
        break;
      case 5:
        if (isNaN(vals[0])) {
          if (wires.has(partsArr[0])) {
            if (isNaN(vals[2])) {
              if (wires.has(partsArr[2])) {
                wires.set(partsArr[4], operate(partsArr[1], wires.get(partsArr[0]), wires.get(partsArr[2])));

                return true;
              }
            } else {
              wires.set(partsArr[4], operate(partsArr[1], wires.get(partsArr[0]), vals[2]));

              return true;
            }
          }
        } else {
          if (isNaN(vals[2])) {
            if (wires.has(partsArr[2])) {
              wires.set(partsArr[4], operate(partsArr[1], vals[0], wires.get(partsArr[2])));

              return true;
            }
          } else {
            wires.set(partsArr[4], operate(partsArr[1], vals[0], vals[2]));

            return true;
          }
        }
        break;
    }

    return false;
  }

  function complement(num) {
    return ~num;
  }

  function operate(operation, value1, value2) {
    switch (operation) {
      case 'AND':
        return value1 & value2;
        break;
      case 'OR':
        return value1 | value2;
        break;
      case 'LSHIFT':
        return value1 << value2;
        break;
      case 'RSHIFT':
        return value1 >>> value2;
        break;
    }
  }

  while (instructions.length) {
    if (index >= instructions.length) {
      index = 0;
    }

    parts = instructions[index].split(' ');

    val = Number.parseInt(parts[0]);

    if (parts.length === 3 && !isNaN(val)) {
      wires.set(parts[2], val);
      instructions.splice(index, 1);
    } else {
      if (checkInstruction(parts)) {
        instructions.splice(index, 1);
      }
    }

    index++;
  }

  console.log(wires);
