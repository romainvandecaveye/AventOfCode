import { Shoal } from './shoal';

describe('shoal', () => {
  it('should have 1 fish after 1 day', () => {
    const actual = new Shoal([3]).getNumberOfFishAfter(1);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it('should have 2 fish after 10 days', () => {
    const actual = new Shoal([3]).getNumberOfFishAfter(8);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should have 5 fish after 1 days', () => {
    const actual = new Shoal([3, 4, 3, 1, 2]).getNumberOfFishAfter(1);
    const expected = 5;
    expect(actual).toBe(expected);
  });

  it('should have 2 fish after 20 days', () => {
    const actual = new Shoal([3]).getNumberOfFishAfter(20);
    const expected = 7;
    expect(actual).toBe(expected);
  });

  it('should have 10 fish after 6 days', () => {
    const actual = new Shoal([3, 4, 3, 1, 2]).getNumberOfFishAfter(6);
    const expected = 10;
    expect(actual).toBe(expected);
  });

  it('should have 26 fish after 10 days', () => {
    const actual = new Shoal([3, 4, 3, 1, 2]).getNumberOfFishAfter(18);
    const expected = 26;
    expect(actual).toBe(expected);
  });

  it('should have 5934 fish after 80 days', () => {
    const actual = new Shoal([3, 4, 3, 1, 2]).getNumberOfFishAfter(80);
    const expected = 5934;
    expect(actual).toBe(expected);
  });

  it('should have 2 fish after 6 days', () => {
    const actual = new Shoal([1]).getNumberOfFishAfter(6);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should have 10 fish after 10 days', () => {
    const actual = new Shoal([3, 4, 3, 1, 2]).getNumberOfFishAfter(10);
    const expected = 10;
    expect(actual).toBe(expected);
  });
});
