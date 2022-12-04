import fs from "fs";
import { threadId } from "worker_threads";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

let count = 0;

const sortDoubles = () => {
  input.map((double, i) => {
    const doubleArr = double.split(",");
    let firstNr = parseInt(doubleArr[0].slice(0, 2));
    let secondNr = parseInt(
      doubleArr[0].substring(doubleArr[0].indexOf("-") + 1)
    );
    let thirdNr = parseInt(doubleArr[1].slice(0, 2));
    let fourthNr = parseInt(
      doubleArr[1].substring(doubleArr[1].indexOf("-") + 1)
    );

    if (
      (firstNr >= thirdNr && firstNr <= fourthNr) ||
      (secondNr >= thirdNr && secondNr <= fourthNr) ||
      (thirdNr >= firstNr && thirdNr <= secondNr) ||
      (fourthNr >= firstNr && fourthNr <= secondNr)
    ) {
      count++;
    } else null;
  });
  return;
};

sortDoubles();
console.log(count);
