import { unwatchFile } from 'fs';
import { Coordinate } from './coordinate';
import { Folding } from './folding';

export function count(draw: string[][]): number {
  let result = 0;
  for (let i = 0; i < draw.length; i++) {
    const row = draw[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === '#') {
        result++;
      }
    }
  }
  return result;
}

export class Paper {
  coordinates: Coordinate[];

  constructor(coordinates: Coordinate[]) {
    this.coordinates = coordinates;
  }

  draw(): string[][] {
    const rowLength = this.coordinates.reduce((prev, curr) =>
      prev.x > curr.x ? prev : curr
    ).x;
    const columnLength = this.coordinates.reduce((prev, curr) =>
      prev.y > curr.y ? prev : curr
    ).y;
    const drawn = [];
    for (let i = 0; i <= columnLength; i++) {
      const row = [];
      for (let j = 0; j <= rowLength; j++) {
        row.push(' ');
      }
      drawn.push(row);
    }
    for (let i = 0; i < this.coordinates.length; i++) {
      const coordinate = this.coordinates[i];
      drawn[coordinate.y][coordinate.x] = '#';
    }
    return drawn;
  }

  foldOnce(draw: string[][], fold: Folding): string[][] {
    const folded = [];
    if (fold.criteria === 'y') {
      for (let i = 0; i < draw.length; i++) {
        const row = draw[i];
        const foldedRow = [];
        for (let j = 0; j < row.length; j++) {
          if (i < fold.value) {
            foldedRow.push(draw[i][j]);
          }
          if (i > fold.value && draw[i][j] === '#') {
            folded[fold.value - (i - fold.value)][j] = '#';
          }
        }
        if (i < fold.value) {
          folded.push(foldedRow);
        }
      }
    }
    if (fold.criteria === 'x') {
      for (let i = 0; i < draw.length; i++) {
        const row = draw[i];
        const foldedRow: string[] = [];
        for (let j = 0; j < row.length; j++) {
          if (j > fold.value && row[j] === '#') {
            foldedRow[fold.value - (j - fold.value)] = '#';
          }
          if (j < fold.value) {
            foldedRow.push(row[j]);
          }
        }
        folded.push(foldedRow);
      }
    }
    return folded;
  }

  foldAll(draw: string[][], folding: Folding[]) {
    let folded = this.foldOnce(draw, folding[0]);
    for (let i = 1; i < folding.length; i++) {
      folded = this.foldOnce(folded.slice(), folding[i]);
    }
    return folded;
  }
}
