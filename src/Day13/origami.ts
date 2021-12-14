import { count, Paper } from './paper';
import { parseCoordinates, parseFolding } from './parser';

export function drawFoldAllAndCount(
  coordinateData: string,
  foldingData: string
) {
  const coordinates = parseCoordinates(coordinateData);
  const folding = parseFolding(foldingData);
  const paper = new Paper(coordinates);
  const folded = paper.foldAll(paper.draw(), folding);
  for (let i = 0; i < folded.length; i++) {
    console.log(folded[i].join(''));
  }
  return count(folded);
}

export function drawFoldOnceAndCount(
  coordinateData: string,
  foldingData: string
) {
  const coordinates = parseCoordinates(coordinateData);
  const folding = parseFolding(foldingData);
  const paper = new Paper(coordinates);
  return count(paper.foldOnce(paper.draw(), folding[0]));
}
