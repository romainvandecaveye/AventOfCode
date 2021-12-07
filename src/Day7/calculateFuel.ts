import * as _ from 'lodash';

function calculateFuelFor(positionToBe: number, positions: number[]): number {
  let fuel = 0;
  positions.forEach((position) => {
    fuel += Math.abs(positionToBe - position);
  });
  return fuel;
}

export function crabsFactor(number: number): number {
  let result = 0;
  for (let i = 0; i <= number; i += 1) {
    result += i;
  }
  return result;
}

function calculateFuelCrabFor(
  positionToBe: number,
  positions: number[]
): number {
  let fuel = 0;
  positions.forEach((position) => {
    const tmpfuel = crabsFactor(Math.abs(positionToBe - position));
    // console.log(positionToBe, '-', position, ' ', tmpfuel);
    fuel += tmpfuel;
  });
  return fuel;
}

export function calculateFuel(numbers: number[]) {
  let minFuel = 9999999999999;
  const positionAlreadyCalculated: number[] = [];
  numbers.forEach((position, indexToFilter) => {
    if (!_.has(positionAlreadyCalculated, position)) {
      const filteredCrabs = numbers.filter(
        (value, index) => indexToFilter !== index
      );
      const fuel = calculateFuelFor(position, filteredCrabs);
      if (fuel < minFuel) {
        minFuel = fuel;
      }
      positionAlreadyCalculated.push(position);
    }
  });
  return minFuel;
}

export function calculateFuelCrab(crabs: number[]) {
  let minFuel = 9999999999999;
  const positionAlreadyCalculated: number[] = [];
  const maxNumber = crabs.reduce((previousValue, currentValue) =>
    previousValue >= currentValue ? previousValue : currentValue
  );
  for (let position = 0; position < maxNumber; position++) {
    if (!_.has(positionAlreadyCalculated, position)) {
      const fuel = calculateFuelCrabFor(position, crabs);
      if (fuel < minFuel) {
        minFuel = fuel;
      }
      positionAlreadyCalculated.push(position);
    }
  }
  return minFuel;
}
