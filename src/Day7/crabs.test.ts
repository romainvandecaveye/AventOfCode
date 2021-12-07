import { calculateFuel, calculateFuelCrab, crabsFactor } from './calculateFuel';

describe('crabs', () => {
  it('should use 0 fuel when 1 crab is pass', () => {
    const actual = calculateFuel([1]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should use 1 fuel when [0,1] crabs is pass', () => {
    const actual = calculateFuel([0, 1]);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it('should use 2 fuel when [1,2,3] crabs is pass', () => {
    const actual = calculateFuel([1, 2, 3]);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should use 2 fuel when [1,2,3,3,3,3,3,3,4] crabs is pass', () => {
    const actual = calculateFuel([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4]);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('should use 37 fuel when [16,1,2,0,4,2,7,1,2,14] crabs is pass', () => {
    const actual = calculateFuel([16, 1, 2, 0, 4, 2, 7, 1, 2, 14]);
    const expected = 37;
    expect(actual).toBe(expected);
  });
});

describe('crabs factor', () => {
  // it('should return 1 when passing 1', () => {
  //   const actual = crabsFactor(1);
  //   const expected = 1;
  //   expect(actual).toBe(expected);
  // });
  //
  // it('should return 3 when passing 2', () => {
  //   const actual = crabsFactor(2);
  //   const expected = 3;
  //   expect(actual).toBe(expected);
  // });
  //
  // it('should return 6 when passing 3', () => {
  //   const actual = crabsFactor(2);
  //   const expected = 3;
  //   expect(actual).toBe(expected);
  // });
  //
  // it('should return 10 when passing 4', () => {
  //   const actual = crabsFactor(4);
  //   const expected = 10;
  //   expect(actual).toBe(expected);
  // });
  // it('should return 16 when passing 136', () => {
  //   const actual = crabsFactor(16);
  //   const expected = 136;
  //   expect(actual).toBe(expected);
  // });
  // it('should return 45 when passing 9', () => {
  //   const actual = crabsFactor(9);
  //   const expected = 45;
  //   expect(actual).toBe(expected);
  // });
});

describe('crabs part 2', () => {
  it('should use 0 fuel when 1 crab is pass', () => {
    const actual = calculateFuelCrab([1]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should use 2 fuel when [1,2,3] crabs is pass', () => {
    const actual = calculateFuel([1, 2, 3]);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should use 2 fuel when [1,1,2,3,4,5,5,6] crabs is pass', () => {
    const actual = calculateFuel([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4]);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('should use 168 fuel when [16,1,2,0,4,2,7,1,2,14] crabs is pass', () => {
    const actual = calculateFuelCrab([16, 1, 2, 0, 4, 2, 7, 1, 2, 14]);
    const expected = 168;
    expect(actual).toBe(expected);
  });
});
