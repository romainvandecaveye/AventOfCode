import { Coordinate } from './coordinate';
import { Folding } from './folding';
import { parseCoordinates, parseDrawn, parseFolding } from './parser';
import { count, Paper } from './paper';

const exampleCoordinateData =
  '6,10\n' +
  '0,14\n' +
  '9,10\n' +
  '0,3\n' +
  '10,4\n' +
  '4,11\n' +
  '6,0\n' +
  '6,12\n' +
  '4,1\n' +
  '0,13\n' +
  '10,12\n' +
  '3,4\n' +
  '3,0\n' +
  '8,4\n' +
  '1,10\n' +
  '2,14\n' +
  '8,10\n' +
  '9,0';

const expectedDraw =
  '   #  #  # \n' +
  '    #      \n' +
  '           \n' +
  '#          \n' +
  '   #    # #\n' +
  '           \n' +
  '           \n' +
  '           \n' +
  '           \n' +
  '           \n' +
  ' #    # ## \n' +
  '    #      \n' +
  '      #   #\n' +
  '#          \n' +
  '# #        ';

const drawnExample = parseDrawn(expectedDraw);
const exampleFoldingData = 'fold along y=7\nfold along x=5';
const exampleFolding = parseFolding(exampleFoldingData);
const exampleCoordinate = parseCoordinates(exampleCoordinateData);

describe('origami parser', () => {
  it('should parseCoordinates one line of coordinates', () => {
    const actual = parseCoordinates('6,10');
    const expected = [new Coordinate(6, 10)];
    expect(actual).toStrictEqual(expected);
  });

  it('should parseCoordinates two lines of coordinates', () => {
    const actual = parseCoordinates('6,10\n7,8');
    const expected = [new Coordinate(6, 10), new Coordinate(7, 8)];
    expect(actual).toStrictEqual(expected);
  });

  it('should parseCoordinates one line of folding', () => {
    const actual = parseFolding('fold along x=1');
    const expected = [new Folding(1, 'x')];
    expect(actual).toStrictEqual(expected);
  });

  it('should parseCoordinates two line of folding', () => {
    const actual = parseFolding('fold along x=1\nfold along y=2');
    const expected = [new Folding(1, 'x'), new Folding(2, 'y')];
    expect(actual).toStrictEqual(expected);
  });
});

describe('place coordinates', () => {
  it('should place 1 coordinates', () => {
    const actual = new Paper([new Coordinate(0, 0)]).draw();
    const expected = [['#']];
    expect(actual).toStrictEqual(expected);
  });
  it('should place 2 coordinates', () => {
    const actual = new Paper([
      new Coordinate(0, 0),
      new Coordinate(1, 1)
    ]).draw();
    const expected = [
      ['#', ' '],
      [' ', '#']
    ];
    expect(actual).toStrictEqual(expected);
  });
  it('should drawn example', () => {
    const actual = new Paper(parseCoordinates(exampleCoordinateData)).draw();
    expect(actual).toStrictEqual(drawnExample);
  });
  it('should drawn 2 coordinates and fold 1 time horizontally', () => {
    const paper = new Paper([
      new Coordinate(0, 0),
      new Coordinate(1, 1),
      new Coordinate(2, 2)
    ]);
    const actual = count(paper.foldOnce(paper.draw(), new Folding(1, 'y')));
    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });
  it('should drawn 2 coordinates and fold 1 time vertically', () => {
    const paper = new Paper([
      new Coordinate(0, 0),
      new Coordinate(1, 1),
      new Coordinate(2, 2)
    ]);
    const actual = count(paper.foldOnce(paper.draw(), new Folding(1, 'x')));
    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });

  it('should drawn from example with fold once', () => {
    const paper = new Paper(exampleCoordinate);
    const actual = count(paper.foldOnce(paper.draw(), exampleFolding[0]));
    const expected = 17;
    expect(actual).toStrictEqual(expected);
  });

  it('should drawn from example with fold all', () => {
    const paper = new Paper(exampleCoordinate);
    const actual = count(paper.foldAll(paper.draw(), exampleFolding));
    const expected = 16;
    expect(actual).toStrictEqual(expected);
  });
});
