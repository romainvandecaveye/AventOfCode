import * as smokeBasin from './smokebassin';

const exampleData = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
];

const smokeBasinFromExample = smokeBasin.findLowestPoints(exampleData);

describe('smoke basing', () => {
  it('should find that "[1]" is the lowest point when sending [[1]]', () => {
    const actual = smokeBasin.findLowestPoints([[1]]);
    const expected = new smokeBasin.LowestPoint([1]);
    expect(actual).toStrictEqual(expected);
  });

  it('should find that "[2]" is the lowest point when sending [[3,2]]', () => {
    const actual = smokeBasin.findLowestPoints([[3, 2]]);
    const expected = new smokeBasin.LowestPoint([2]);
    expect(actual).toStrictEqual(expected);
  });

  it('should find that "[2]" is the lowest point when sending [[1,3,2,4],[3, 4, 2, 6]]', () => {
    const actual = smokeBasin.findLowestPoints([
      [1, 3, 3, 4],
      [3, 4, 2, 6]
    ]);
    const expected = new smokeBasin.LowestPoint([1, 2]);
    expect(actual).toStrictEqual(expected);
  });

  it('should find that "[1,0,5,5]" is the lowest point when sending example', () => {
    const actual = smokeBasinFromExample;
    const expected = new smokeBasin.LowestPoint([1, 0, 5, 5]);
    expect(actual).toStrictEqual(expected);
  });

  it('should find 15 as a sum of all lower point from example', () => {
    const actual = smokeBasinFromExample.getRiskLevel();
    const expected = 15;
    expect(actual).toBe(expected);
  });
});

describe('parser', () => {
  it('should parse 1 line', () => {
    const actual = smokeBasin.parseLine('1');
    const expected = [[1]];
    expect(actual).toStrictEqual(expected);
  });
  it('should parse 1 line', () => {
    const actual = smokeBasin.parseLine('1234');
    const expected = [[1, 2, 3, 4]];
    expect(actual).toStrictEqual(expected);
  });
  it('should parse 2 line', () => {
    const actual = smokeBasin.parseLine('12\n34');
    const expected = [
      [1, 2],
      [3, 4]
    ];
    expect(actual).toStrictEqual(expected);
  });
  it('should parse lines from example', () => {
    const actual = smokeBasin.parseLine(
      '2199943210\n' +
        '3987894921\n' +
        '9856789892\n' +
        '8767896789\n' +
        '9899965678'
    );
    const expected = [
      [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
      [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
      [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
      [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
      [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe('basin ', () => {
  it('should example', () => {
    const basins = smokeBasin.findLowestBasin(exampleData);
    basins.sort((a, b) => b.size() - a.size());
    const biggestBasins = [basins[0], basins[1], basins[2]];
    console.log(biggestBasins);
    const actual = biggestBasins.reduce((prev, curr) => prev * curr.size(), 1);
    const expected = 1134;
    expect(actual).toBe(expected);
  });
});
