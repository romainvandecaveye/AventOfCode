import Case from './Case';

export default class Board {
  board: Case[][];

  lastMarked: number;

  rowSize: number;

  columnSize: number;

  constructor(board: number[][]) {
    this.rowSize = board[0].length;
    this.columnSize = board.length;
    this.board = [];
    this.lastMarked = -1;

    for (let columnIdx = 0; columnIdx < this.columnSize; columnIdx += 1) {
      const newRow = [];
      for (let rowIdx = 0; rowIdx < this.rowSize; rowIdx += 1) {
        newRow.push(new Case(board[columnIdx][rowIdx]));
      }
      this.board.push(newRow);
    }
  }

  has(number: number): Case | null {
    let result = null;
    this.board.forEach((row) => {
      row.forEach((c) => {
        if (c.number === number) {
          result = c;
        }
      });
    });
    return result;
  }

  isFinished(): boolean {
    let isFinished = false;
    this.board.forEach((row) => {
      if (row.filter((c) => !c.marked).length === 0) isFinished = true;
    });
    for (let i = 0; i < this.rowSize; i += 1) {
      const columnAsArray = this.getColumnAsArray(i);
      if (columnAsArray.filter((c) => !c.marked).length === 0)
        isFinished = true;
    }

    return isFinished;
  }

  private getColumnAsArray(index: number): Case[] {
    const columns = Array(this.columnSize);
    for (let columnIdx = 0; columnIdx < this.columnSize; columnIdx += 1) {
      columns.push(this.board[columnIdx][index]);
    }
    return columns;
  }

  markAll(numbers: number[]) {
    numbers.forEach((number) => this.mark(number));
  }

  mark(number: number) {
    this.lastMarked = number;
    this.board.forEach((row) => {
      row.forEach((c) => {
        if (c.number === number) {
          c.mark();
        }
      });
    });
  }

  calculateWin(draws: number[]): number {
    let counter = 0;
    for (let i = 0; i < draws.length; i += 1) {
      this.mark(draws[i]);
      counter += 1;
      if (this.isFinished()) {
        return counter;
      }
    }
    return counter;
  }

  getUnmarkedCases(): Case[] {
    const unmarkedCases: Case[] = [];
    this.board.forEach((row) => {
      row.forEach((c) => {
        if (!c.marked) {
          unmarkedCases.push(c);
        }
      });
    });
    return unmarkedCases;
  }

  calculatePower(): number {
    const unmarkedCases: Case[] = this.getUnmarkedCases();
    const sum = unmarkedCases
      .map((c) => c.number)
      .reduce((prev, curr) => prev + curr);
    return sum * this.lastMarked;
  }
}
