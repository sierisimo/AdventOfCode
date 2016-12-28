var lastStr = "1113222113",
  newStr,
  count = 0;

var part1 = 40, part2 = 50;

for (var i = 0; i < part2; i++) {
  newStr = "";

  console.log(lastStr);

  for (var l = 0, curr = lastStr[0]; l < lastStr.length; l++) {
    if (curr !== lastStr[l]) {
      newStr += count + "" + curr;
      curr = lastStr[l];
      count = 1;
    } else {
      count++;
    }
  }

  newStr += count + "" + curr;

  lastStr = newStr;
  count = 0;
}

console.log(lastStr.length);
