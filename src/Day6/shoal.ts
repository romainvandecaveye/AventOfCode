export function getNumberOfFishAfter(
  data: number[],
  numberOfDays: number
): number {
  const myMap = new Map<number, number>();
  for (let i = 0; i <= 8; i += 1) {
    myMap.set(i, 0);
  }
  data.forEach((fish) => {
    myMap.set(fish, (myMap.get(fish) ?? 0) + 1);
  });

  for (let day = 1; day <= numberOfDays; day += 1) {
    const numberOfFish = myMap.get(0) ?? 0;
    for (let i = 0; i < 9; i += 1) {
      if (i === 8) {
        myMap.set(i, numberOfFish);
      } else if (i === 6) {
        const countFromBefore = myMap.get(i + 1) ?? 0;
        myMap.set(i, countFromBefore + numberOfFish);
      } else {
        const countFromBefore = myMap.get(i + 1) ?? 0;
        myMap.set(i, countFromBefore);
      }
    }
  }

  let total = 0;
  myMap.forEach((value) => {
    total += value;
  });
  return total;
}
