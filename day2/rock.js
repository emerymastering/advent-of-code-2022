import fs from "fs";

//A=X=Rock
//B=Y=Paper
//C=Z=Scissors
//he-me
// A X => 1 + 3 = 4
// A Y => 2 + 6 = 8
// A Z => 3 + 0 = 3
// B X => 1 + 0 = 1
// B Y => 2 + 3 = 5
// B Z => 3 + 6 = 9
// C X => 1 + 6 = 7
// C Y => 2 + 0 = 2
// C Z => 3 + 3 = 6

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");
let sum = 0;

input.map((game) => {
  if (game.charAt(0) === "A" && game.charAt(2) === "X") {
    sum += 4;
  } else if (game.charAt(0) === "A" && game.charAt(2) === "Y") {
    sum += 8;
  } else if (game.charAt(0) === "A" && game.charAt(2) === "Z") {
    sum += 3;
  } else if (game.charAt(0) === "B" && game.charAt(2) === "X") {
    sum += 1;
  } else if (game.charAt(0) === "B" && game.charAt(2) === "Y") {
    sum += 5;
  } else if (game.charAt(0) === "B" && game.charAt(2) === "Z") {
    sum += 9;
  } else if (game.charAt(0) === "C" && game.charAt(2) === "X") {
    sum += 7;
  } else if (game.charAt(0) === "C" && game.charAt(2) === "Y") {
    sum += 2;
  } else if (game.charAt(0) === "C" && game.charAt(2) === "Z") {
    sum += 6;
  }
});

console.log(sum);
