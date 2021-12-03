export function compareNumber(first: number, second: number): string {
  if (first < second) {
    return 'increased';
  }
  if (first === second) {
    return 'no change';
  }
  return 'decreased';
}

export function analyseSimpleArray(arrayOfNumber: number[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < arrayOfNumber.length - 1; i++) {
    result.push(compareNumber(arrayOfNumber[i], arrayOfNumber[i + 1]));
  }
  return result;
}

export function analyseDeepArray(arrayOfNumber: number[]): string[] {
  const result: string[] = [];
  let curr = 0;
  let prev = 0;
  for (let i = 0; i < arrayOfNumber.length - 2; i++) {
    if (i == 0) {
      result.push('N/A - no previous sum');
      prev = arrayOfNumber[i] + arrayOfNumber[i + 1] + arrayOfNumber[i + 2];
    } else {
      curr = arrayOfNumber[i] + arrayOfNumber[i + 1] + arrayOfNumber[i + 2];
      result.push(compareNumber(prev, curr));
      prev = curr;
    }
  }
  return result;
}

export function getNumberOfIncreasedFromSimpleArrayOfNumber(
  arrayOfNumber: number[]
) {
  const anlyseOfAscendingAndDescending = analyseSimpleArray(arrayOfNumber);
  let countOfIncreased = 0;
  for (let i = 0; i < anlyseOfAscendingAndDescending.length; i++) {
    if (anlyseOfAscendingAndDescending[i] === 'increased') {
      countOfIncreased++;
    }
  }
  return countOfIncreased;
}

export function getNumberOfIncreasedFromDeepArrayOfNumber(
  arrayOfNumber: number[]
) {
  const anlyseOfAscendingAndDescending = analyseDeepArray(arrayOfNumber);
  let countOfIncreased = 0;
  for (let i = 0; i < anlyseOfAscendingAndDescending.length; i++) {
    if (anlyseOfAscendingAndDescending[i] === 'increased') {
      countOfIncreased++;
    }
  }
  return countOfIncreased;
}
