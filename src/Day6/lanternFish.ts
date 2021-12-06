export class LanternFish {
  internalTimer: number;

  constructor(internalTimer: number) {
    this.internalTimer = internalTimer;
  }

  getInternalTimer() {
    return this.internalTimer;
  }

  live1Day() {
    if (this.internalTimer === 0) {
      this.internalTimer = 6;
    } else {
      this.internalTimer -= 1;
    }
  }
}
