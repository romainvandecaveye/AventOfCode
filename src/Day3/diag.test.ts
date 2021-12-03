import * as diag from './diag';

describe('get bits', () => {
  it('should return 1 from "1000"', () => {
    const actual = diag.getBitAtPosition('1000', 0);
    const expected = '1';
    expect(actual).toStrictEqual(expected);
  });
  it('should return 1 from "0100"', () => {
    const actual = diag.getBitAtPosition('0100', 1);
    const expected = '1';
    expect(actual).toStrictEqual(expected);
  });
});

describe('verify bits', () => {
  it('should return true if the first bit is 1-bit from bits 1000 ', () => {
    const actual = diag.verifyBitAtPosition('1', '1000', 0);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('should return true if the second bit is 1-bit from bits 1000 ', () => {
    const actual = diag.verifyBitAtPosition('1', '0100', 1);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('should return true if the first bit is 0-bit from bits 1000 ', () => {
    const actual = diag.verifyBitAtPosition('0', '0111', 0);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe('count bits', () => {
  it('should return 1 after counting how much first 1-bit is there in the array [1000,0111]', () => {
    const actual = diag.countFirstCharFromArray(['1000', '0111'], '1', 1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should return 2 after counting how much first 1-bit is there in the array [1000,1000,0111]', () => {
    const actual = diag.countFirstCharFromArray(['1000', '0111'], '1', 1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

describe('find the bit with most occurrence (1 or 0)', () => {
  it('should return 1 as it is the bit with the most occurrence at Position 0 in the array [1000,0000,1000,0111]', () => {
    const actual = diag.getDiffWith1and0FromArrayAtPosition(
      ['1000', '0000', '1000', '1111'],
      0
    );
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
describe('find the bit with least occurrence (1 or 0)', () => {
  it('should return -2 as it is the bit with the least occurrence at Position 0 in the array [1000,0000,1000,0111]', () => {
    const actual = diag.getDiffWith1and0FromArrayAtPosition(
      ['0000', '0000', '1000', '0111'],
      0
    );
    const expected = -2;
    expect(actual).toBe(expected);
  });
});
describe('gamma rate', () => {
  it('should return 11111 as binary gamma rate from [11111]', () => {
    const actual = diag.getBinaryGammaRate(['11111']);
    const expected = '11111';
    expect(actual).toBe(expected);
  });

  it('should return 11111 as binary gamma rate from [11111,00000,10101]', () => {
    const actual = diag.getBinaryGammaRate(['11111', '00000', '10101']);
    const expected = '10101';
    expect(actual).toBe(expected);
  });

  it('should return 10110 as binary gamma rate from example', () => {
    const actual = diag.getBinaryGammaRate([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    const expected = '10110';
    expect(actual).toBe(expected);
  });
});

describe('epsilon rate', () => {
  it('should return 11111 as epsilon gamma rate from [00000]', () => {
    const actual = diag.getBinaryEpsilonRate(['00000']);
    const expected = '11111';
    expect(actual).toBe(expected);
  });

  it('should return 11111 as binary gamma rate from [11111,00000,10101]', () => {
    const actual = diag.getBinaryEpsilonRate(['11111', '00000', '10101']);
    const expected = '01010';
    expect(actual).toBe(expected);
  });

  it('should return 10110 as binary gamma rate from example', () => {
    const actual = diag.getBinaryEpsilonRate([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    const expected = '01001';
    expect(actual).toBe(expected);
  });
});

describe('calculate rate from binary', () => {
  it('should return 1 when I try to calculate 01', () => {
    const actual = diag.binaryToDec('01');
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should return 2 when I try to calculate 10', () => {
    const actual = diag.binaryToDec('10');
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('should return 10 when I try to calculate 1010', () => {
    const actual = diag.binaryToDec('1010');
    const expected = 10;
    expect(actual).toBe(expected);
  });
  it('should return 22 when I try to calculate 10110', () => {
    const actual = diag.binaryToDec('10110');
    const expected = 22;
    expect(actual).toBe(expected);
  });
});

describe('calculate power consumption', () => {
  it('should return 198 when I try pass ', () => {
    const actual = diag.calculatePowerConsumption([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    const expected = 198;
    expect(actual).toBe(expected);
  });
});

describe('oxygen binary generator rating', () => {
  it('should return 11111 when I pass ["11111"] ', () => {
    const actual = diag.getBinaryOxygenGenerator(['11111']);
    const expected = '11111';
    expect(actual).toBe(expected);
  });

  it('should return 10110 when I pass [10000, 10110, 11110] ', () => {
    const actual = diag.getBinaryOxygenGenerator(['10000', '10110', '11110']);
    const expected = '10110';
    expect(actual).toBe(expected);
  });
  it('should return 23 when I try pass ', () => {
    const actual = diag.getOxygenGenerator([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    const expected = 23;
    expect(actual).toBe(expected);
  });
});

describe('C02 binary scrubber rating', () => {
  it('should return 11111 when I pass ["11111"] ', () => {
    const actual = diag.getBinaryCO2Scrubber(['11111']);
    const expected = '11111';
    expect(actual).toBe(expected);
  });

  it('should return 10110 when I pass [10000, 10110, 11110] ', () => {
    const actual = diag.getBinaryCO2Scrubber(['00000', '00110', '11110']);
    const expected = '11110';
    expect(actual).toBe(expected);
  });
  it('should return 10 when I try pass ', () => {
    const actual = diag.getCO2Scrubber([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    const expected = 10;
    expect(actual).toBe(expected);
  });
});

describe('life support rating', () => {
  it('should return 230 when I pass the example', () => {
    const actual = diag.calculateLifeSupportRating([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010'
    ]);
    const expected = 230;
    expect(actual).toBe(expected);
  });
});
