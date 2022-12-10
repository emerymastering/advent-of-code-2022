import * as fs from 'fs';
import {
  getFolderSize,
  getFolderSizeSum,
  printFoldersWithSizes,
  printTree,
} from './helpers';
import { FolderNode, FileNode } from './entities';

function parseInput(): FolderNode {
  // tree points to the root node that wewillbe returning
  const tree = new FolderNode('', null, []);
  const data = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');
  // thispoints to  the folder we are currently in, for now it's root
  let currentFolder: FolderNode = tree;
  for (const line of data) {
    const parts = line.split(' ');
    if (parts[0] === '$') {
      const command = parts[1];
      if (command === 'cd') {
        const folderName = parts[2];
        if (folderName === '/') currentFolder = tree;
        else if (folderName === '..') {
          if (currentFolder.parent === null)
            throw new Error(
              `Parent is null for: ${JSON.stringify(currentFolder)}`,
            );
          currentFolder = currentFolder.parent;
        } else {
          if (!folderName)
            throw new Error(`Found cd command with empty folder, line ${line}`);
          let folderEntry = currentFolder.nodes.find(
            (obj) => obj instanceof FolderNode && obj.name === folderName,
          ) as FolderNode;
          // if folder doesn excist it creates a new node in the tree, if exists makes it currentfolder
          if (!folderEntry) {
            folderEntry = new FolderNode(folderName, currentFolder, []);
            currentFolder.nodes.push(folderEntry);
          }
          currentFolder = folderEntry;
        }
      }
    } else {
      if (parts[0] === 'dir') {
        currentFolder.nodes.push(new FolderNode(parts[1], currentFolder, []));
      } else {
        const filesize = parseInt(parts[0]);
        if (isNaN(filesize))
          throw new Error(`filesize invalid in line: ${line}`);
        currentFolder.nodes.push(
          new FileNode(parts[1], currentFolder, filesize),
        );
        console.log('aaa', currentFolder);
      }
    }
  }
  return tree;
}

function findFoldersBelowTreshold(
  node: FolderNode,
  treshold: number,
  output: FolderNode[],
) {
  for (const subNode of node.nodes) {
    if (subNode instanceof FolderNode) {
      const folderSize = getFolderSize(subNode);
      if (folderSize <= treshold) output.push(subNode);
      findFoldersBelowTreshold(subNode, treshold, output);
    }
  }
}

function findFoldersAboveTreshold(
  node: FolderNode,
  treshold: number,
  output: FolderNode[],
) {
  for (const subNode of node.nodes) {
    if (subNode instanceof FolderNode) {
      const folderSize = getFolderSize(subNode);
      if (folderSize > treshold) output.push(subNode);
      findFoldersAboveTreshold(subNode, treshold, output);
    }
  }
}

const tree = parseInput();
printTree(tree);
console.log('------');
const foldersBelowTreshold: FolderNode[] = [];
const foldersAboveTreshold: FolderNode[] = [];
findFoldersBelowTreshold(tree, 100000, foldersBelowTreshold);
printFoldersWithSizes(foldersBelowTreshold);
const totalSize = getFolderSizeSum(foldersBelowTreshold);
console.log(totalSize);
const totalMaxSize = getFolderSize(tree);
console.log('free size', 70000000 - totalMaxSize);
const sizeNeeded = 30000000 - (70000000 - totalMaxSize);
// console.log('to free', 30000000 - (70000000 - totalMaxSize));
// console.log(foldersBelowTreshold);
findFoldersAboveTreshold(tree, sizeNeeded, foldersAboveTreshold);
printFoldersWithSizes(foldersAboveTreshold);
console.log(
  Math.min(...foldersAboveTreshold.map((entry) => getFolderSize(entry))),
);
