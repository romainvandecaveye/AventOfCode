import { Venture } from './venture';
import * as parser from './parser';
import { Coordinates } from './coordinates';
import { calculateOverlapping } from './hydrotermal-venture';

describe('Parser', () => {
  it('should parse 1 line to a list one 1 Venture', () => {
    const line = '0,9 -> 5,9';
    const expectedVenture = new Venture(0, 9, 5, 9);
    const actualVenture = parser.parseLine(line);
    expect(actualVenture).toStrictEqual(expectedVenture);
  });

  it('should parse 1 line to a list one 1 Venture', () => {
    const line = '0,1 -> 0,9';
    const expectedVenture = new Venture(0, 1, 0, 9);
    const actualVenture = parser.parseLine(line);
    expect(actualVenture).toStrictEqual(expectedVenture);
  });

  it('should parse 2 lines to an array of 2 Ventures', () => {
    const text = '0,1 -> 0,9\n0,1 -> 0,8';
    const expectedVenture1 = new Venture(0, 1, 0, 9);
    const expectedVenture2 = new Venture(0, 1, 0, 8);
    const expected = [expectedVenture1, expectedVenture2];
    const actual = parser.parseVentureAndFilterDiagonale(text);
    expect(actual).toStrictEqual(expected);
  });

  it('should parse 2 lines to an array of 2 Ventures', () => {
    const text = '0,1 -> 0,9\n8,0 -> 8,8\n9,4 -> 3,4';
    const expectedVenture1 = new Venture(0, 1, 0, 9);
    const expectedVenture2 = new Venture(8, 0, 8, 8);
    const expectedVenture3 = new Venture(9, 4, 3, 4);
    const expected = [expectedVenture1, expectedVenture2, expectedVenture3];
    const actual = parser.parseVentureAndFilterDiagonale(text);
    expect(actual).toStrictEqual(expected);
  });
});

describe('venture path', () => {
  it('should send the path of 1 coordinates that the venture will cover', () => {
    const actual = new Venture(0, 0, 0, 0).getPath();
    const expected = [new Coordinates(0, 0)];
    expect(actual).toStrictEqual(expected);
  });
  it('should send the path of 2 coordinates that the venture will cover', () => {
    const actual = new Venture(0, 0, 1, 0).getPath();
    const expected = [new Coordinates(0, 0), new Coordinates(1, 0)];
    expect(actual).toStrictEqual(expected);
  });
  it('should send the path of 3 coordinates that the venture will cover', () => {
    const actual = new Venture(0, 0, 2, 0).getPath();
    const expected = [
      new Coordinates(0, 0),
      new Coordinates(1, 0),
      new Coordinates(2, 0)
    ];
    expect(actual).toStrictEqual(expected);
  });
  it('should send the path of 4 coordinates that the venture will cover', () => {
    const actual = new Venture(0, 4, 0, 0).getPath();
    const expected = [
      new Coordinates(0, 4),
      new Coordinates(0, 3),
      new Coordinates(0, 2),
      new Coordinates(0, 1),
      new Coordinates(0, 0)
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe('Map', () => {
  it('should return 1 overlapping when 2 same ventures are passed', () => {
    const venture1 = new Venture(0, 0, 1, 0);
    const venture2 = new Venture(0, 0, 0, 1);
    const ventures = [venture1, venture2];
    const actual = calculateOverlapping(ventures);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should return 2 overlapping when 3 ventures that cross a 2 points are passed', () => {
    const venture1 = new Venture(0, 0, 0, 2);
    const venture2 = new Venture(2, 0, 2, 2);
    const venture3 = new Venture(0, 1, 2, 1);
    const ventures = [venture1, venture2, venture3];
    const actual = calculateOverlapping(ventures);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('should return 3 overlapping when 3 ventures that cross a 2 points are passed', () => {
    const venture1 = new Venture(5, 0, 5, 10);
    const venture2 = new Venture(0, 0, 10, 0);
    const venture3 = new Venture(0, 3, 10, 3);
    const venture4 = new Venture(0, 6, 10, 6);
    const ventures = [venture1, venture2, venture3, venture4];
    const actual = calculateOverlapping(ventures);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
