import fs from "fs";
const input = fs.readFileSync("./inputs.txt", "utf8").split("\n");

input.reverse();

// 1 get first dir name, check what is in this dir
// 2 if dir has sub dir check whats in side subdir, otherwise count the sizes on files.
// 3 add dirname and size to dirSizeOjb
let currentDir = [];
let withCD = [];

let dirSizeObj = {
  dirname: "size",
};

input.map((element) => {
  if (element.includes("dir")) {
    currentDir.push(element.split(" ")[1]);
  }
});

for (let i = 0; i <= currentDir.length - 1; i++) {
  input.find((element) => {
    element === `$ cd ${currentDir[i]}` ? withCD.push(element) : null;
  });
}

input.map((element) => {
  let sum = 0;
  if (/\d/.test(element)) {
    sum = sum + element.match(/(\d+)/)[0];
    console.log(element.match(/(\d+)/)[0].split("/n"));
    console.log("sum", sum);
    // if (element.includes("$ cd") {
    //     console.log();
    // })
  }
});

// console.log(currentDir);
console.log(withCD);
