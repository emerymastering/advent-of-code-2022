import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let count = 0;

const sortDoubles = () => {
  input.map((double, i) => {
    const doubleArr = double.split(",");

    if (
      (parseInt(doubleArr[1].substring(doubleArr[1].indexOf("-") + 1)) >=
        parseInt(doubleArr[0].slice(0, 2)) &&
        parseInt(doubleArr[0].slice(0, 2)) >=
          parseInt(doubleArr[1].slice(0, 2))) ||
      (parseInt(doubleArr[1].substring(doubleArr[1].indexOf("-") + 1)) >=
        parseInt(doubleArr[0].substring(doubleArr[0].indexOf("-") + 1)) &&
        parseInt(doubleArr[0].substring(doubleArr[0].indexOf("-") + 1)) >=
          parseInt(doubleArr[1].slice(0, 2)))
    ) {
      count++;
      console.log("line", i + 1, double);
      console.log(count);
    } else null;
  });
  return;
};

sortDoubles();
// console.log(count);
