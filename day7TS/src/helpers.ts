import { FolderNode, Node, FileNode } from './entities';

function getFullPath(node: Node): string {
  if (node.parent === null) return '';
  return getFullPath(node.parent) + '/' + node.name;
}

// bouncing folder size calculator
export function getFolderSize(folder: FolderNode) {
  let size = 0;
  for (const entry of folder.nodes) {
    size +=
      entry instanceof FileNode
        ? entry.size
        : getFolderSize(entry as FolderNode);
  }
  return size;
}

// to display node data for one node
function logEntity(node: Node) {
  // eslint-disable-next-line prettier/prettier
  console.log(`${node instanceof FolderNode ? 'DIR ' : 'FILE'} ${getFullPath(node) || '/'} ${node instanceof FileNode ? node.size : getFolderSize(node as FolderNode)}`);
}

// recursion, towalk though the tree an dprint each node!!
export function printTree(node: FolderNode) {
  logEntity(node);
  for (const entity of node.nodes) {
    if (entity instanceof FolderNode) printTree(entity);
    else logEntity(entity);
  }
}

export function printFoldersWithSizes(folders: FolderNode[]) {
  for (const folder of folders) {
    console.log(`${getFullPath(folder)} ${getFolderSize(folder)}`);
  }
}

export function getFolderSizeSum(folders: FolderNode[]): number {
  let sum = 0;
  for (const folder of folders) {
    sum += getFolderSize(folder);
  }
  return sum;
}
