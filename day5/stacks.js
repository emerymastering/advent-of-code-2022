import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

const stack = input.slice(0, 8);
const instructions = input.slice(10);
let replacedInstructions = [];

for (let i = 0; i <= instructions.length - 1; i++) {
  const instruction = instructions[i]
    .replace("move", "")
    .replace("from", ",")
    .replace("to", ",")
    .split(",");

  replacedInstructions.push([...instruction]);
}

let newArrayBig = [];
let newArraySmall = [];

// 1, 5, 9, 13, 17, 21, 25, 29, 33;
for (let i = 1; i <= 33; i = i + 4) {
  for (let j = 0; j <= 7; j++) {
    newArraySmall = newArraySmall + stack[j].charAt(i);
  }
  newArrayBig = newArrayBig + newArraySmall + ",";
  newArraySmall = [];
}

let sortedArray = newArrayBig
  .split(",")
  .map((element) => element.replace(/\s/g, ""))
  .slice(0, -1);

for (let i = 0; i <= replacedInstructions.length - 1; i++) {
  //   console.log("from", +replacedInstructions[i][1]);
  //   console.log("to", +replacedInstructions[i][2]);
  //   console.log("how many", +replacedInstructions[i][0]);
  const movingPart = sortedArray[+replacedInstructions[i][1] - 1]
    .slice(0, +replacedInstructions[i][0])
    .split("")
    .reverse()
    .join("");
  sortedArray[+replacedInstructions[i][1] - 1] = sortedArray[
    +replacedInstructions[i][1] - 1
  ].slice(+replacedInstructions[i][0]);
  sortedArray[+replacedInstructions[i][2] - 1] =
    movingPart + sortedArray[+replacedInstructions[i][2] - 1];

  //   console.log("which part", movingPart);
  //   console.log("after sorting", sortedArray);
}
console.log(sortedArray.map((line) => line.charAt(0)));
