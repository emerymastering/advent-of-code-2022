const flat = [
  "folder0/50000",
  "folder0/subfolder1/40000",
  "folder1",
  "folder1/subfolder1",
  "folder1/subfolder2",
  "folder1/subfolder3",
  "folder1/subfolder3/subsubfolder1",
  "folder1/subfolder3/subsubfolder2",
];
const nested = {};
const add = (source, target) => {
  //   console.log("target", target);
  //   console.log("nested", nested);
  const elements = source.split("/");
  //   console.log("elements", elements);
  const element = elements.shift();
  //   console.log("element:", element);

  if (parseInt(element)) {
    // console.log(element, "element is a number");
  }
  //   console.log("targer element", target[element]);
  target[element] = target[element] || element;
  if (elements.length) {
    target[element] =
      typeof target[element] === "object" ? target[element] : {};
    add(elements.join("/"), target[element]);
  }
};

flat.forEach((item) => add(item, nested));

console.log(nested);
