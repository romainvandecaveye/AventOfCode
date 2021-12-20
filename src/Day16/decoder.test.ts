import {
  decodeBinToDecimal,
  decodeHexToBin,
  decodeStringHexToBin,
  getPacketsLength,
  getPacketLengthTypeId,
  getTypeOfPacket,
  getVersionOfPacket,
  splitPackets
} from './decoder';
import {count} from "../Day13/paper";

describe('decode bits', () => {
  it('should decode 0000 to 0', () => {
    const actual = decodeBinToDecimal('0000');
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it('should decode 0001 to 1', () => {
    const actual = decodeBinToDecimal('0001');
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should decode 0010 to 0', () => {
    const actual = decodeBinToDecimal('0010');
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('should decode 0011 to 0', () => {
    const actual = decodeBinToDecimal('0011');
    const expected = 3;
    expect(actual).toBe(expected);
  });
  it('should decode 0100 to 4', () => {
    const actual = decodeBinToDecimal('0100');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('should decode 0101 to 5', () => {
    const actual = decodeBinToDecimal('0101');
    const expected = 5;
    expect(actual).toBe(expected);
  });
});

describe('decode hex to bin', () => {
  it('should decode 0 to 0', () => {
    const actual = decodeHexToBin('0');
    const expected = '0000';
    expect(actual).toBe(expected);
  });
  it('should decode A to 1010', () => {
    const actual = decodeHexToBin('A');
    const expected = '1010';
    expect(actual).toBe(expected);
  });
  it('should decode F to 1111', () => {
    const actual = decodeHexToBin('F');
    const expected = '1111';
    expect(actual).toBe(expected);
  });

  it('should decode "D2FE28 to "110100101111111000101000"', () => {
    const actual = decodeStringHexToBin('D2FE28');
    const expected = '110100101111111000101000';
    expect(actual).toBe(expected);
  });

  it('should decode "38006F45291200 to "00111000000000000110111101000101001010010001001000000000"', () => {
    const actual = decodeStringHexToBin('38006F45291200');
    const expected = '00111000000000000110111101000101001010010001001000000000';
    expect(actual).toBe(expected);
  });

  it('should decode "EE00D40C823060 to "11101110000000001101010000001100100000100011000001100000"', () => {
    const actual = decodeStringHexToBin('EE00D40C823060');
    const expected = '11101110000000001101010000001100100000100011000001100000';
    expect(actual).toBe(expected);
  });
});

describe('parse sub packets', () => {
  it('should respond "110" when getting version of packet "110100101111111000101000" ', () => {
    const actual = getVersionOfPacket('110100101111111000101000');
    const expected = 6;
    expect(actual).toBe(expected);
  });
  it('should respond "001" when getting version of packet "00111000000000000110111101000101001010010001001000000000" ', () => {
    const actual = getVersionOfPacket(
      '00111000000000000110111101000101001010010001001000000000'
    );
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should return type of packet 110100101111111000101000', () => {
    const actual = getTypeOfPacket('110100101111111000101000');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('should return lengthType of packet 00111000000000000110111101000101001010010001001000000000', () => {
    const actual = getPacketLengthTypeId(
      '00111000000000000110111101000101001010010001001000000000'
    );
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it('should return lengthType of packet 11101110000000001101010000001100100000100011000001100000', () => {
    const actual = getPacketLengthTypeId(
      '11101110000000001101010000001100100000100011000001100000'
    );
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should return length of packet 38006F45291200', () => {
    const actual = getPacketsLength(decodeStringHexToBin('38006F45291200'));
    const expected = 27;
    expect(actual).toBe(expected);
  });
  it('should return length of packet EE00D40C823060', () => {
    const actual = getPacketsLength(decodeStringHexToBin('EE00D40C823060'));
    const expected = 3;
    expect(actual).toBe(expected);
  });
});

describe('packet splitter', () => {
  it('should respond split "D2FE28" into 1 packet of ["110100101111111000101000"] ', () => {
    const actual = splitPackets('D2FE28');
    const expected = ['110100101111111000101000'];
    expect(actual).toStrictEqual(expected);
  });
  it('should respond split "D2FE28D2FE28" into 2 packet of ["110100101111111000101000","110100101111111000101000"] ', () => {
    const actual = splitPackets('D2FE28D2FE28');
    const expected = ['110100101111111000101000', '110100101111111000101000'];
    expect(actual).toStrictEqual(expected);
  });
  it('should respond split "D2FE2838006F45291200" into 1 packet of ["110100101111111000101000","00111000000000000110111101000101001010010001001000000000"] ', () => {
    const actual = splitPackets('D2FE2838006F45291200');
    const expected = [
      '110100101111111000101000',
      '00111000000000000110111101000101001010010001001000000000'
    ];
    expect(actual).toStrictEqual(expected);
  });
  it('should respond split "D2FE2838006F45291200EE00D40C823060" into 1 packet of ["110100101111111000101000","00111000000000000110111101000101001010010001001000000000","11101110000000001101010000001100100000100011000001100000"] ', () => {
    const actual = splitPackets('D2FE2838006F45291200EE00D40C823060');
    const expected = [
      '110100101111111000101000',
      '00111000000000000110111101000101001010010001001000000000',
      '11101110000000001101010000001100100000100011000001100000'
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe('version sum', () => {
  it('should return 16', () => {
    const actual = count()splitPackets('D2FE2838006F45291200EE00D40C823060');
    const expected
  });
});
