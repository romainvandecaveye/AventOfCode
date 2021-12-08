import { decode, translate } from './decode';

const map = new Map<string, string>();
const mapFromExample = new Map<string, string>();
mapFromExample.set('b', 'e');
mapFromExample.set('c', 'a');
mapFromExample.set('e', 'g');
mapFromExample.set('f', 'b');

describe('seven-segment decode', () => {
  it('should decode 1 when i put segment "cf"', () => {
    const actual = decode('cf', map);
    const expected = '1';
    expect(actual).toBe(expected);
  });

  it('should decode 4 when i put segment "bcdf"', () => {
    const actual = decode('bcdf', map);
    const expected = '4';
    expect(actual).toBe(expected);
  });

  it('should decode 7 when i put segment "acf"', () => {
    const actual = decode('acf', map);
    const expected = '7';
    expect(actual).toBe(expected);
  });

  it('should decode 0 when i put segment "abcefg"', () => {
    const actual = decode('abcefg', map);
    const expected = '0';
    expect(actual).toBe(expected);
  });

  it('should decode 8 when i put segment "abcdefg"', () => {
    const actual = decode('abcdefg', map);
    const expected = '8';
    expect(actual).toBe(expected);
  });

  it('should decode 9 when i put segment "abcdfg"', () => {
    const actual = decode('abcdfg', map);
    const expected = '9';
    expect(actual).toBe(expected);
  });

  it('should decode 6 when i put segment "abdefg"', () => {
    const actual = decode('abdefg', map);
    const expected = '6';
    expect(actual).toBe(expected);
  });

  it('should find the same map as example', () => {
    const actual = translate([
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab'
    ]);
    const expected = new Map();
    expected.set('a', 'd');
    expected.set('b', 'e');
    expected.set('c', 'a');
    expected.set('d', 'f');
    expected.set('e', 'g');
    expected.set('f', 'b');
    expected.set('g', 'c');
    expect(actual).toStrictEqual(expected);
  });
  it('should decode 3 when i put segment "acdfg"', () => {
    const actual = decode('acdfg', map);
    const expected = '3';
    expect(actual).toBe(expected);
  });

  it('should decode 5 when i put segment "abdfg"', () => {
    const actual = decode('abdfg', map);
    const expected = '5';
    expect(actual).toBe(expected);
  });

  it('should map 8 from example', () => {
    const actual = decode('acedgfb', mapFromExample);
    const expected = '8';
    expect(actual).toBe(expected);
  });

  it('should map 2 from example', () => {
    const actual = decode('gcdfa', mapFromExample);
    const expected = '2';
    expect(actual).toBe(expected);
  });
  it('should map 5 from example', () => {
    const actual = decode('cdfbe', mapFromExample);
    const expected = '5';
    expect(actual).toBe(expected);
  });
});
