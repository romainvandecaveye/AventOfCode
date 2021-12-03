export function compareNumber(first: number, second: number): string {
  if (first < second) {
    return 'increased';
  } else if (first == second){
    return 'no change';
  }else{
    return 'decreased';
  }
}

export function analyseSimpleArray(arrayOfNumber: number[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < arrayOfNumber.length - 1; i++) {
    result.push(compareNumber(arrayOfNumber[i], arrayOfNumber[i + 1]));
  }
  return result;
}

export function analyseDeepArray(arrayOfNumber: number[]): string[] {
  let result: string[] = [];
  let curr = 0, prev = 0;
  for (let i = 0; i < arrayOfNumber.length - 2; i++) {
    if (i == 0) {
      result.push('N/A - no previous sum');
      prev = arrayOfNumber[i] + arrayOfNumber[i+1] + arrayOfNumber[i+2];
    } else {
      curr = arrayOfNumber[i] + arrayOfNumber[i+1] + arrayOfNumber[i+2];
      result.push(compareNumber(prev, curr));  
      prev = curr;
    }
    
  }
  return result;
}

export function getNumberOfIncreasedFromSimpleArrayOfNumber(arrayOfNumber: number[]) {
  let anlyseOfAscendingAndDescending = analyseSimpleArray(arrayOfNumber);
  let countOfIncreased = 0;
  for (let i = 0; i < anlyseOfAscendingAndDescending.length; i++) {
    if (anlyseOfAscendingAndDescending[i] == 'increased') {
      countOfIncreased++;
    }
  }
  return countOfIncreased;
}

export function getNumberOfIncreasedFromDeepArrayOfNumber(arrayOfNumber: number[]) {
  let anlyseOfAscendingAndDescending = analyseDeepArray(arrayOfNumber);
  let countOfIncreased = 0;
  for (let i = 0; i < anlyseOfAscendingAndDescending.length; i++) {
    if (anlyseOfAscendingAndDescending[i] == 'increased') {
      countOfIncreased++;
    }
  }
  return countOfIncreased;
}