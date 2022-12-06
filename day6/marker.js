import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n").toString();

const length = [4, 14];

for (let i = 0; i <= input.length - length[1]; i++) {
  const firstFour = input.slice(i, i + length[1]);
  const checker = /(.).*\1/.test(firstFour);

  if (checker === false) {
    console.log(input.slice(i + length[1]), i + length[1]);
    break;
  }

  if (i === input.length - length[1]) {
    break;
  }
}
