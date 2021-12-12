function formatCoordinate(i: number, j: number) {
  return `${i}-${j}`;
}

function notFlashed(seen: string[], i: number, j: number) {
  for (let k = 0; k < seen.length; k++) {
    const coordinate = formatCoordinate(i, j);
    if (seen[k] === coordinate) {
      return false;
    }
  }
  return true;
}
export class OctopusCoal {
  coal: number[][];

  flashes: number;

  private firstSynchronizedDay: number;

  constructor(coal: number[][]) {
    this.coal = coal;
    this.flashes = 0;
    this.firstSynchronizedDay = -1;
  }

  flash(i: number, j: number, flashed: string[]) {
    if (
      i >= 0 &&
      i < this.coal.length &&
      j >= 0 &&
      j < this.coal[0].length &&
      this.coal[i][j] !== undefined &&
      notFlashed(flashed, i, j)
    ) {
      this.coal[i][j] += 1;
      if (this.coal[i][j] > 9) {
        flashed.push(formatCoordinate(i, j));
        this.flashes++;
        this.flash(i - 1, j - 1, flashed);
        this.flash(i - 1, j, flashed);
        this.flash(i - 1, j + 1, flashed);
        this.flash(i, j - 1, flashed);
        this.flash(i, j + 1, flashed);
        this.flash(i + 1, j - 1, flashed);
        this.flash(i + 1, j, flashed);
        this.flash(i + 1, j + 1, flashed);
      }
    }
  }

  live(dayToLive: number) {
    let day = 0;
    while (day < dayToLive) {
      const flashed: string[] = [];
      for (let i = 0; i < this.coal.length; i++) {
        const octopusRow = this.coal[i];
        for (let j = 0; j < octopusRow.length; j++) {
          octopusRow[j] += 1;
          if (octopusRow[j] > 9) {
            this.flash(i, j, flashed);
          }
        }
      }
      for (let i = 0; i < this.coal.length; i++) {
        const octopusRow = this.coal[i];
        for (let j = 0; j < octopusRow.length; j++) {
          if (octopusRow[j] > 9) {
            octopusRow[j] = 0;
          }
        }
      }
      let flag = true;
      for (let i = 0; i < this.coal.length; i++) {
        const octopusRow = this.coal[i];
        for (let j = 0; j < octopusRow.length; j++) {
          if (octopusRow[j] !== 0) {
            flag = false;
          }
        }
      }
      day++;
      if (flag) {
        this.firstSynchronizedDay = day;
      }
    }
  }

  numberOfFlashes(): number {
    return this.flashes;
  }

  liveUntilSynchronizedDay(): number {
    let countDays = 0;
    while (this.firstSynchronizedDay === -1) {
      this.live(1);
      countDays++;
    }
    return countDays;
  }
}
