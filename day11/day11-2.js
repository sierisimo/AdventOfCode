var str = process.argv[2]

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  splittedArg = str.split(''),
  currentValues = [];

for (var i = 0; i < splittedArg.length; i++) {
  currentValues.push(letters.indexOf(splittedArg[i]));
}

function hasFirstCondition(start, length) {
  if ((start + 3) > length)
    return false;

  return (currentValues[start] === (currentValues[start + 1] - 1) && currentValues[start] === (currentValues[start + 2] - 2) ? true : hasFirstCondition(start + 1, length));
}

function hasSecondCondition(cont, firstPair, start, length) {
  if (cont === 2 && firstPair !== -1)
    return true;

  if ((start + 2) > length)
    return false;

  return (currentValues[start] === currentValues[start + 1] && currentValues[start] !== firstPair ? hasSecondCondition(cont + 1, currentValues[start], start + 1, length) : hasSecondCondition(cont, firstPair, start + 1, length));
}

function advanceByOne(index) {
  currentValues[index]++;
  if (currentValues[index] === letters.length) {
    currentValues[index] = 0;
    advanceByOne(index - 1);
  }
}

var currWord;

while (true) {
  currWord = "";
  for (var i = 0; i < currentValues.length; i++) {
    currWord += letters[currentValues[i]];
  }

  console.log(currWord, "=>", hasFirstCondition(0, currentValues.length), ":", hasSecondCondition(0, -1, 0, currentValues.length))

  if ((hasFirstCondition(0, currentValues.length) && hasSecondCondition(0, -1, 0, currentValues.length))) {
    break;
  } else {
    advanceByOne(currentValues.length - 1);
  }
}

console.log("Out", currWord, "=>", hasFirstCondition(0, currentValues.length), ":", hasSecondCondition(0, -1, 0, currentValues.length))
