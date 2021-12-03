import * as sonar from '../Day1/sonar';

describe('analyse number', () => {
  it('should return "increased" when the first number is lower than the second', () => {
    const first = 1;
    const second = 2;
    const actual = sonar.compareNumber(first, second);
    const expected = 'increased';
    expect(actual).toStrictEqual(expected);
  });

  it('should return "decreased" when the first number is greater than the second', () => {
    const first = 2;
    const second = 1;
    const actual = sonar.compareNumber(first, second);
    const expected = 'decreased';
    expect(actual).toStrictEqual(expected);
  });
});

describe('analyse simple array', () => {
  it('should return "increased" when analysing an array of 2 ascending numbers', () => {
    const ascendingArray = [1, 2];
    const actual = sonar.analyseSimpleArray(ascendingArray);
    const expected = ['increased'];
    expect(actual).toStrictEqual(expected);
  });

  it('should return "decreased" when analysing an array of 2 descending numbers', () => {
    const ascendingArray = [2, 1];
    const actual = sonar.analyseSimpleArray(ascendingArray);
    const expected = ['decreased'];
    expect(actual).toStrictEqual(expected);
  });

  it('should return "decreased,increased" when analysing an array of 3 descending then ascending numbers', () => {
    const ascendingArray = [2, 1, 3];
    const actual = sonar.analyseSimpleArray(ascendingArray);
    const expected = ['decreased', 'increased'];
    expect(actual).toStrictEqual(expected);
  });
});

describe('analyse deep array', () => {
  it('should return "increased" when analysing an array of 2 ascending numbers', () => {
    const exempleArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const actual = sonar.analyseDeepArray(exempleArray);
    const expected = [
      'N/A - no previous sum',
      'increased',
      'no change',
      'decreased',
      'increased',
      'increased',
      'increased',
      'increased'
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe('counting array', () => {
  it('should count 1 "increased" when analysing an array of 2 ascending numbers', () => {
    const ascendingArray = [1, 2];
    const actual =
      sonar.getNumberOfIncreasedFromSimpleArrayOfNumber(ascendingArray);
    const expected = 1;
    expect(actual).toStrictEqual(expected);
  });
  it('should count 2 "increased" when analysing an array of 3 ascending numbers', () => {
    const ascendingArray = [1, 2, 3];
    const actual =
      sonar.getNumberOfIncreasedFromSimpleArrayOfNumber(ascendingArray);
    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });
  it('should count 3 "increased" when analysing an array of 3 ascending numbers with 2 descending number', () => {
    const ascendingArray = [1, 2, 1, 2, 1, 2];
    const actual =
      sonar.getNumberOfIncreasedFromSimpleArrayOfNumber(ascendingArray);
    const expected = 3;
    expect(actual).toStrictEqual(expected);
  });

  it('should count 7 "increased" when analyzing the array from the site', () => {
    const exempleArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const actual =
      sonar.getNumberOfIncreasedFromSimpleArrayOfNumber(exempleArray);
    const expected = 7;
    expect(actual).toStrictEqual(expected);
  });

  it('should count 5 "increased" when deep analyzing the array from the site', () => {
    const exempleArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const actual =
      sonar.getNumberOfIncreasedFromDeepArrayOfNumber(exempleArray);
    const expected = 5;
    expect(actual).toStrictEqual(expected);
  });
});
