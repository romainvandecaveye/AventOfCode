export function binaryToDec(binaryStr: string) {
  const lastIndex = binaryStr.length - 1;
  let total = 0;

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[lastIndex - i] === '1') {
      total += 2 ** i;
    }
  }

  return total;
}

export function getBitAtPosition(string: string, position: number): string {
  return string.substring(position, position + 1);
}

export function verifyBitAtPosition(
  char: string,
  string: string,
  position: number
): boolean {
  return char === getBitAtPosition(string, position);
}

export function countFirstCharFromArray(
  bitsArray: string[],
  char: string,
  position: number
): number {
  let counter = 0;
  bitsArray.forEach((bits) => {
    if (verifyBitAtPosition(char, bits, position)) counter += 1;
  });
  return counter;
}

export function getDiffWith1and0FromArrayAtPosition(
  bitsArray: string[],
  position: number
): number {
  const numberOf0 = countFirstCharFromArray(bitsArray, '0', position);
  const numberOf1 = countFirstCharFromArray(bitsArray, '1', position);
  return numberOf1 - numberOf0;
}

export function getBinaryGammaRate(bitsArray: string[]) {
  const lastPosition = bitsArray[0].length;
  let index = 0;
  let binaryGammaRate = '';
  while (index < lastPosition) {
    if (getDiffWith1and0FromArrayAtPosition(bitsArray, index) > 0) {
      binaryGammaRate += '1';
    } else {
      binaryGammaRate += '0';
    }
    index += 1;
  }
  return binaryGammaRate;
}

export function getBinaryEpsilonRate(bitsArray: string[]) {
  const lastPosition = bitsArray[0].length;
  let index = 0;
  let binaryGammaRate = '';
  while (index < lastPosition) {
    if (getDiffWith1and0FromArrayAtPosition(bitsArray, index) > 0) {
      binaryGammaRate += '0';
    } else {
      binaryGammaRate += '1';
    }
    index += 1;
  }
  return binaryGammaRate;
}

export function calculatePowerConsumption(bits: string[]): number {
  const binaryEpsilonRate = getBinaryEpsilonRate(bits);
  const binaryGammaRate = getBinaryGammaRate(bits);
  const epsilonRate = binaryToDec(binaryEpsilonRate);
  const gammaRate = binaryToDec(binaryGammaRate);
  return epsilonRate * gammaRate;
}

function filterBitWithCharAt(
  bitsArray: string[],
  char: string,
  position: number
): string[] {
  return bitsArray.filter(
    (bits) => bits.substring(position, position + 1) === char
  );
}

function getRatingBit(
  bitsArray: string[],
  position: number,
  isOxygen: boolean
): string {
  if (bitsArray.length === 1) {
    return bitsArray[0];
  }
  const diffBetween0And1 = getDiffWith1and0FromArrayAtPosition(
    bitsArray,
    position
  );
  let decisiveChar = isOxygen ? '1' : '0';

  if (diffBetween0And1 === 0) {
    const filteredBits = filterBitWithCharAt(bitsArray, decisiveChar, position);
    return getRatingBit(filteredBits, position + 1, isOxygen);
  }
  if (diffBetween0And1 < 0) {
    decisiveChar = isOxygen ? '0' : '1';
  }
  const filteredBits = filterBitWithCharAt(bitsArray, decisiveChar, position);
  return getRatingBit(filteredBits, position + 1, isOxygen);
}

export function getBinaryOxygenGenerator(bitsArray: string[]): string {
  return getRatingBit(bitsArray, 0, true);
}

export function getBinaryCO2Scrubber(bitsArray: string[]): string {
  return getRatingBit(bitsArray, 0, false);
}

export function getOxygenGenerator(bitsArray: string[]): number {
  return binaryToDec(getBinaryOxygenGenerator(bitsArray));
}

export function getCO2Scrubber(bitsArray: string[]): number {
  return binaryToDec(getBinaryCO2Scrubber(bitsArray));
}

export function calculateLifeSupportRating(bitsArray: string[]): number {
  return getCO2Scrubber(bitsArray) * getOxygenGenerator(bitsArray);
}
