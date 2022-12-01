// Day1 https://adventofcode.com/2022/day/1
// Plan:
// 1 get data from https://adventofcode.com/2022/day/1/input
// 2 put data in array
// 3 Make nested arays based on null field
// 4 calc sum of each nested array and find max
// 5 exclude max and find 2nd max and also third and sum them
//
import fs from "fs";

// Importing data from file

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Making nested array

  const dataArray = data.split("\n").map(Number);
  //   console.log(dataArray);
  let temp = [];
  let result = [];
  dataArray.map((x) => {
    if (x != 0) {
      temp.push(x);
    } else {
      result.push(temp);
      temp = [];
    }
  });

  // Making sure last element is added as well

  temp.length != 0 ? result.push(temp) : "";

  // Making array of all nested arrays sums

  let calArrElf = [];

  const totalByElf = result.map((calElf, i) => {
    const totalCal = calElf.reduce((sum, num) => sum + num, 0);
    calArrElf.push(totalCal);
    console.log("Elf:", i + 1, "Cal:", totalCal);
    const maxValue = Math.max(...calArrElf);
    return maxValue;
  });

  // Finding max and Summing top 3

  const maxNumber = Math.max(...totalByElf);

  console.log("Max calories by Elf:", maxNumber);

  console.log(
    "Total by 3 top Elfes:",
    calArrElf
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => {
        return a + b;
      }, 0)
  );

  return data;
});
