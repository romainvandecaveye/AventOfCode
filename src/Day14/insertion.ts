export class Insertion {
  pair: string;

  newPairs: string[];

  constructor(pair: string, value: string) {
    this.pair = pair;
    this.newPairs = [
      Array.from(this.pair)[0] + value,
      value + Array.from(this.pair)[1]
    ];
  }
}
