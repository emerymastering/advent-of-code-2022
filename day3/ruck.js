// Plan
// 1. Split each line in half, create object from 2 halves of each line
// 2. Make new object from it.
// 3. check which letter is same in both halfs
// 4. create array and then object of letters list with values as keys
// 5. check which letter from task 3 has which value and add those values to new array.
// 6. calculate the sum of all values in the array.

import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

// 1
const splitHalf = input.map((line) => {
  return [
    line.substring(0, line.length / 2),
    line.substring(line.length / 2, line.length),
  ];
});

// 2
const newObj = Object.assign({}, splitHalf);

// 3
let lettersArr = [];
for (let i = 0; i <= Object.keys(newObj).length - 1; i++) {
  const check = newObj[i][0].split("").filter((a) => {
    return newObj[i][1].includes(a) ? a : null;
  });
  lettersArr.push(check[0]);
}

// 4
let lettersCountArr = [];

for (let i = 97; i <= 122; i++) {
  lettersCountArr.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
  lettersCountArr.push(String.fromCharCode(i));
}
const lettersObj = Object.assign({}, lettersCountArr);

// 5
function findKey(object, value) {
  for (let key in object) if (object[key] === value) return +key + 1;

  return "key is not found";
}
let valuesArr = [];

const sumOfValues = () => {
  return lettersArr.map((letter) => {
    valuesArr.push(findKey(lettersObj, letter));
  });
};

sumOfValues();

// 6
console.log(
  "the sum of the priorities:",
  valuesArr.reduce((acc, val) => {
    return acc + val;
  }, 0)
);
