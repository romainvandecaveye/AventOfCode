export default class Coordinates {
  horizontal: number;

  depth: number;

  aim: number;

  constructor(horizontal: number, depth: number, aim: number) {
    this.horizontal = horizontal;
    this.depth = depth;
    this.aim = aim;
  }

  multiply(): number {
    return this.horizontal * this.depth;
  }
}
