const CYCLE_BEFORE_POP = 6;
const INITIAL_CYCLE_BEFORE_POP = 8;

function getNumberOfSonsFromCycleNumberDuring(
  fishGestating: number,
  numberOfDays: number
) {
  if (fishGestating >= numberOfDays) {
    return 0;
  }
  return Math.floor(numberOfDays / CYCLE_BEFORE_POP);
}

function createSons(
  numberOfSons: number,
  father: number,
  numberOfDays: number
): number[] {
  const sons = [];
  for (let i = 0; i < numberOfSons; i += 1) {
    const futureSon =
      INITIAL_CYCLE_BEFORE_POP + father + i * CYCLE_BEFORE_POP + (i + 1);
    if (futureSon <= numberOfDays + INITIAL_CYCLE_BEFORE_POP) {
      sons.push(futureSon);
    }
  }
  return sons;
}

function calculateNumberOfFish(shoal: number[], numberOfDays: number): number {
  if (shoal.length === 0) {
    return 0;
  }
  const fish = shoal[0];
  const numberOfSons = getNumberOfSonsFromCycleNumberDuring(fish, numberOfDays);
  const sons = createSons(numberOfSons, fish, numberOfDays);
  return (
    1 +
    calculateNumberOfFish(sons, numberOfDays) +
    calculateNumberOfFish(shoal.slice(1, shoal.length), numberOfDays)
  );
}

export class Shoal {
  shoal: number[];

  constructor(numbers: number[]) {
    this.shoal = numbers;
  }

  getNumberOfFishAfter(numberOfDays: number): number {
    return calculateNumberOfFish(this.shoal, numberOfDays);
  }
}
