import { LanternFish } from './lanternFish';

export class Shoal {
  shoalOfFish: LanternFish[];

  constructor(shoalOfFish: number[]) {
    this.shoalOfFish = [];
    shoalOfFish.forEach((number) => {
      this.shoalOfFish.push(new LanternFish(number));
    });
  }

  getNumberOfFish(): number {
    return this.shoalOfFish.length;
  }

  live1Day() {
    this.shoalOfFish.forEach((fish) => {
      if (fish.getInternalTimer() === 0) {
        this.shoalOfFish.push(new LanternFish(8));
      }
      fish.live1Day();
    });
  }

  liveDuring(numberOfDays: number) {
    if (numberOfDays !== 0) {
      this.live1Day();
      this.liveDuring(numberOfDays - 1);
    }
  }
}
