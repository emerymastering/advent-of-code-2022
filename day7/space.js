import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

// 1 get first dir name, check what is in this dir
// 2 if dir has sub dir check whats in side subdir, otherwise count the sizes on files.
// 3 add dirname and size to dirSizeOjb
let currentDir = [];
let previousDir = [];
let filesize = 0;
let foldersArr = [];
let mainDir = "/";
let periousDir = "";

input.map((element, index) => {
  if (element.includes("dir")) {
    currentDir.push(element.split(" ")[1]);
  }
  if (parseInt(element) > 0) {
    filesize += parseInt(element);
  }
  if (element.includes("$ cd") && element != "$ cd ..") {
    index = input.indexOf(element);
    console.log("index", index);
    console.log("so element", element);
    mainDir = element.split(" ")[2];
    console.log("main dir", mainDir);
    const joinerArr = currentDir.join("/");
    foldersArr.push(mainDir + "/" + joinerArr, filesize);
    currentDir = [];
    filesize = 0;
  }
  if (element.includes("$ cd ..")) {
    currentDir = previousDir;
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
    // console.log(element.match(/(\d+)/)[0].split("/n"));
    // console.log("sum", sum);
    // if (element.includes("$ cd") {
    //     console.log();
    // })
  }
});

// console.log(currentDir);

console.log("folders arr", foldersArr);
