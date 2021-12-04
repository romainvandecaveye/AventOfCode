export default class Case {
  number: number;

  marked: boolean;

  constructor(number: number) {
    this.number = number;
    this.marked = false;
  }

  mark(): void {
    this.marked = true;
  }
}
