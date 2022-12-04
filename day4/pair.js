import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let count = 0;

const sortDoubles = () => {
  input.map((double) => {
    const doubleArr = double.split(",");
    console.log(input.length);
    // console.log(double);
    // console.log(parseInt(input[2].slice(0, 2)));
    // console.log(parseInt(+doubleArr[0].slice(0, 2)));
    if (
      (parseInt(doubleArr[0].slice(0, 2)) >=
        parseInt(doubleArr[1].slice(0, 2)) &&
        parseInt(doubleArr[0].substring(doubleArr[0].indexOf("-") + 1)) <=
          parseInt(doubleArr[1].substring(doubleArr[1].indexOf("-") + 1))) ||
      (parseInt(doubleArr[1].slice(0, 2)) >=
        parseInt(doubleArr[0].slice(0, 2)) &&
        parseInt(doubleArr[1].substring(doubleArr[1].indexOf("-") + 1)) <=
          parseInt(doubleArr[0].substring(doubleArr[0].indexOf("-") + 1)))
    ) {
      count++;
    } else null;
  });
  return;
};

sortDoubles();
console.log(count);
