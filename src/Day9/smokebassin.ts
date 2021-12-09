export function parseLine(s: string): number[][] {
  const stringsArray = s.split('\n');
  const numbers = [];

  for (let i = 0; i < stringsArray.length; i += 1) {
    const oneLineNumbersString = Array.from(stringsArray[i]);
    const oneLineNumber = [];
    for (let j = 0; j < oneLineNumbersString.length; j += 1) {
      oneLineNumber.push(parseInt(oneLineNumbersString[j], 10));
    }
    numbers.push(oneLineNumber);
  }

  return numbers;
}

export class LowestBasin {
  values: number[];

  constructor(values: number[]) {
    this.values = values;
  }

  size(): number {
    return this.values.length;
  }
}

export class LowestPoint {
  points: number[];

  constructor(points: number[]) {
    this.points = points;
  }

  getRiskLevel() {
    let sum = 0;
    for (let i = 0; i < this.points.length; i++) {
      sum += this.points[i] + 1;
    }
    return sum;
  }
}

function formatCoordinates(x: number, y: number): string {
  return `${x}:${y}`;
}

function alreadySeen(seen: string[], x: number, y: number): boolean {
  for (let i = 0; i < seen.length; i++) {
    if (seen[i] === formatCoordinates(x, y)) {
      return true;
    }
  }
  return false;
}
function pushValues(
  values: number[],
  y: number,
  x: number,
  map: number[][],
  seen: string[]
): number[] {
  if (
    alreadySeen(seen, x, y) ||
    map[y] === undefined ||
    map[y][x] === undefined ||
    map[y][x] >= 9
  ) {
    return [];
  }
  seen.push(formatCoordinates(x, y));
  values.push(map[y][x]);
  pushValues(values, y, x + 1, map, seen);
  pushValues(values, y, x - 1, map, seen);
  pushValues(values, y + 1, x, map, seen);
  pushValues(values, y - 1, x, map, seen);
  return values;
}

export function findLowestBasin(rows: number[][]): LowestBasin[] {
  const lowestBasin = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const upperRow = rows[i - 1];
    const lowerRow = rows[i + 1];
    for (let j = 0; j < row.length; j++) {
      const value = row[j];
      const rightSideValue = row[j + 1];
      const leftSideValue = row[j - 1];
      const upperSideValue = upperRow !== undefined ? upperRow[j] : undefined;
      const downSideValue = lowerRow !== undefined ? lowerRow[j] : undefined;
      let isLower = true;
      if (rightSideValue !== undefined && value > rightSideValue) {
        isLower = false;
      }
      if (downSideValue !== undefined && value >= downSideValue) {
        isLower = false;
      }
      if (upperSideValue !== undefined && value >= upperSideValue) {
        isLower = false;
      }
      if (leftSideValue !== undefined && value >= leftSideValue) {
        isLower = false;
      }
      if (isLower) {
        lowestBasin.push(new LowestBasin(pushValues([], i, j, rows, [])));
      }
    }
  }
  return lowestBasin;
}

export function findLowestPoints(rows: number[][]): LowestPoint {
  const lowestPoints = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const upperRow = rows[i - 1];
    const lowerRow = rows[i + 1];
    for (let j = 0; j < row.length; j++) {
      const value = row[j];
      const rightSideValue = row[j + 1];
      const leftSideValue = row[j - 1];
      const upperSideValue = upperRow !== undefined ? upperRow[j] : undefined;
      const downSideValue = lowerRow !== undefined ? lowerRow[j] : undefined;
      let isLower = true;
      if (rightSideValue !== undefined && value > rightSideValue) {
        isLower = false;
      }
      if (downSideValue !== undefined && value >= downSideValue) {
        isLower = false;
      }
      if (upperSideValue !== undefined && value >= upperSideValue) {
        isLower = false;
      }
      if (leftSideValue !== undefined && value >= leftSideValue) {
        isLower = false;
      }
      if (isLower) {
        lowestPoints.push(value);
      }
    }
  }
  return new LowestPoint(lowestPoints);
}
