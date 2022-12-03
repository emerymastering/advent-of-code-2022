// Plan
// 1. select array from each 3 lines
// 2. Make new object from it.
// 3. check which letter is same in all 3 lines
// 4. create array and then object of letters list with values as keys
// 5. check which letter from task 3 has which value and add those values to new array.
// 6. calculate the sum of all values in the array.

import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

// 1
let arrayOftriplets = [];

for (let i = 0; i <= input.length - 1; i = i + 3) {
  arrayOftriplets.push([input[i], input[i + 1], input[i + 2]]);
}

// 2
const newObj = Object.assign({}, arrayOftriplets);
console.log(newObj);

// 3
let lettersArr = [];
let finalArr = [];
for (let i = 0; i <= Object.keys(newObj).length - 1; i++) {
  const check = [
    ...new Set(
      newObj[i][0].split("").filter((a) => {
        return newObj[i][1].includes(a) ? a : null;
      })
    ),
  ];

  const compareStringTwo = check.toString().replaceAll(",", "");
  const checkTwo = [
    ...new Set(
      newObj[i][2].split("").filter((a) => {
        return compareStringTwo.includes(a) ? lettersArr.push(a) : null;
      })
    ),
  ].toString();
  finalArr.push(checkTwo);
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
  return finalArr.map((letter) => {
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
