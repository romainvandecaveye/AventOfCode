import assert from 'assert';

function formatCoordinates(columnIndex: number, rowIndex: number) {
  return `${columnIndex}-${rowIndex}`;
}

class Node {
  columnIndex: number;

  rowIndex: number;

  weight: number;

  key: string;

  constructor(columnIndex: number, rowIndex: number, weight: number) {
    this.columnIndex = columnIndex;
    this.rowIndex = rowIndex;
    this.weight = weight;
    this.key = formatCoordinates(this.columnIndex, this.rowIndex);
  }
}
function parseChitonsTable(s: string): number[][] {
  const lines = s.split('\n').filter(Boolean);
  const result: number[][] = [];
  lines.forEach((line) =>
    result.push(Array.from(line).map((value) => parseInt(value, 10)))
  );
  return result;
}

export function parseChitonsData(s: string) {
  const lines = s.split('\n').filter(Boolean);
  const map: Map<string, Node> = new Map();
  const result: number[][] = [];
  lines.forEach((line) =>
    result.push(Array.from(line).map((value) => parseInt(value, 10)))
  );
  for (let columnIndex = 0; columnIndex < result.length; columnIndex++) {
    const row = result[columnIndex];
    for (let rowIndex = 0; rowIndex < row.length; rowIndex++) {
      const newNode = new Node(columnIndex, rowIndex, row[rowIndex]);
      map.set(newNode.key, newNode);
    }
  }
  return map;
}

function findMinNode(
  allNodes: Map<string, Node>,
  distances: Map<string, number>
): Node | undefined {
  const min = Number.MAX_SAFE_INTEGER;
  let nodeMin;
  allNodes.forEach((node) => {
    if ((distances.get(node.key) ?? Number.MAX_SAFE_INTEGER) < min) {
      nodeMin = node;
    }
  });
  return nodeMin;
}

function getNeighbors(node: Node, remainingNodes: Map<string, Node>): Node[] {
  const neighbors = [];
  const botNeighbor = remainingNodes.get(
    formatCoordinates(node.columnIndex + 1, node.rowIndex)
  );
  if (botNeighbor) {
    neighbors.push(botNeighbor);
  }
  const topNeighbor = remainingNodes.get(
    formatCoordinates(node.columnIndex - 1, node.rowIndex)
  );
  if (topNeighbor) {
    neighbors.push(topNeighbor);
  }
  const rightNeighbor = remainingNodes.get(
    formatCoordinates(node.columnIndex, node.rowIndex + 1)
  );
  if (rightNeighbor) {
    neighbors.push(rightNeighbor);
  }
  const leftNeighbor = remainingNodes.get(
    formatCoordinates(node.columnIndex, node.rowIndex - 1)
  );
  if (leftNeighbor) {
    neighbors.push(leftNeighbor);
  }
  return neighbors;
}

function updateDistance(
  n1: Node,
  n2: Node,
  distances: Map<string, number>,
  predecessors: Map<string, Node>
) {
  const distanceN1 = distances.get(n1.key);
  const distanceN2 = distances.get(n2.key);
  assert(distanceN1);
  assert(distanceN2);
  if (distanceN2 > distanceN1 + n1.weight + n2.weight) {
    distances.set(n2.key, distanceN1 + n1.weight + n2.weight);
    predecessors.set(n2.key, n1);
  }
}

export function getPath(s: string | undefined) {
  assert(s);
  const AllNodes = parseChitonsData(s);
  const chitonsTable = parseChitonsTable(s);
  const startNode = new Node(0, 0, chitonsTable[0][0]);
  const endNode = new Node(
    chitonsTable.length - 1,
    chitonsTable[0].length - 1,
    chitonsTable[chitonsTable.length - 1][chitonsTable[0].length - 1]
  );
  const distances = new Map();
  const predecessors = new Map();
  AllNodes.forEach((node) => distances.set(node.key, Infinity));
  distances.set(startNode.key, startNode.weight);

  while (AllNodes.size !== 0) {
    const n1 = findMinNode(AllNodes, distances);
    assert(n1);
    AllNodes.delete(n1.key);
    const neighbors: Node[] = getNeighbors(n1, AllNodes);
    for (let i = 0; i < neighbors.length; i++) {
      const n2 = neighbors[i];
      updateDistance(n1, n2, distances, predecessors);
    }
  }

  const path = [];
  let currNode = endNode;
  while (currNode.key !== startNode.key) {
    path.unshift(currNode);
    const predecessor = predecessors.get(currNode.key);
    currNode = predecessor;
  }
  path.unshift(startNode);
  console.log(path.map((node) => node.key));
  return path.reduce((prev, curr) => prev + curr.weight, 0);
}
