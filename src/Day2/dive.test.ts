import Coordinates from '../Day2/Coordinates';
import * as day2 from '../Day2/dive';

describe('simple dive', () => {
  it('should return [1,0] when it is forward 1', () => {
    const actual = day2.dive('forward 1');
    const expected = new Coordinates(1, 0, 0);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [0,0,1] when it is down 1', () => {
    const actual = day2.dive('down 1');
    const expected = new Coordinates(0, 0, 1);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [0,0,-1] when it is up 1', () => {
    const actual = day2.dive('up 1');
    const expected = new Coordinates(0, 0, -1);
    expect(actual).toStrictEqual(expected);
  });
});

describe('dive from position', () => {
  it('should return [2,1,0] when it is forward 1 from position [1,1,0]', () => {
    const actual = day2.diveFrom('forward 1', new Coordinates(1, 1, 0));
    const expected = new Coordinates(2, 1, 0);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [1,1,1] when it is down 1 from position [1,1,0]', () => {
    const actual = day2.diveFrom('down 1', new Coordinates(1, 1, 0));
    const expected = new Coordinates(1, 1, 1);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [1,1,0] when it is up 1 from position [1,1,1]', () => {
    const actual = day2.diveFrom('up 1', new Coordinates(1, 1, 1));
    const expected = new Coordinates(1, 1, 0);
    expect(actual).toStrictEqual(expected);
  });
});

describe('dive with array', () => {
  it('should return 900 when it is forward 1 from example array ', () => {
    const exempleArray = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2'
    ];
    const actual = day2.diveFromArray(exempleArray).multiply();
    const expected = new Coordinates(15, 60, 0).multiply();
    expect(actual).toStrictEqual(expected);
  });
});
