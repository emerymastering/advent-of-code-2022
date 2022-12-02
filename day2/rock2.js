import fs from "fs";

//A=Rock X=loose
//B=Paper Y=draw
//C=Scissors Z=win
//he-me
// A X => 3 + 0 = 3
// A Y => 1 + 3 = 4
// A Z => 2 + 6 = 8
// B X => 1 + 0 = 1
// B Y => 2 + 3 = 5
// B Z => 3 + 6 = 9
// C X => 2 + 0 = 2
// C Y => 3 + 3 = 6
// C Z => 1 + 6 = 7

// Importing data from file

const input = fs.readFileSync("./input.txt", "utf8").split("\n");
let sum = 0;

input.map((game) => {
  if (game.charAt(0) === "A" && game.charAt(2) === "X") {
    sum += 3;
  } else if (game.charAt(0) === "A" && game.charAt(2) === "Y") {
    sum += 4;
  } else if (game.charAt(0) === "A" && game.charAt(2) === "Z") {
    sum += 8;
  } else if (game.charAt(0) === "B" && game.charAt(2) === "X") {
    sum += 1;
  } else if (game.charAt(0) === "B" && game.charAt(2) === "Y") {
    sum += 5;
  } else if (game.charAt(0) === "B" && game.charAt(2) === "Z") {
    sum += 9;
  } else if (game.charAt(0) === "C" && game.charAt(2) === "X") {
    sum += 2;
  } else if (game.charAt(0) === "C" && game.charAt(2) === "Y") {
    sum += 6;
  } else if (game.charAt(0) === "C" && game.charAt(2) === "Z") {
    sum += 7;
  }
});

console.log(sum);
