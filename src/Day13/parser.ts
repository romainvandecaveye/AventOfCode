import { Coordinate } from './coordinate';
import { Folding } from './folding';

export function parseCoordinates(datas: string): Coordinate[] {
  const lines = datas.split('\n');
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const coordinates = lines[i].split(',');
    result.push(
      new Coordinate(parseInt(coordinates[0], 10), parseInt(coordinates[1], 10))
    );
  }
  return result;
}

export function parseFolding(datas: string) {
  const lines = datas.split('\n');
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const criteria = line['fold along z'.length - 1];
    const value = line.substring('fold along z='.length);
    result.push(new Folding(parseInt(value, 10), criteria));
  }
  return result;
}

export function parseDrawn(datas: string) {
  const lines = datas.split('\n');
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    result.push(Array.from(lines[i]));
  }
  return result;
}
