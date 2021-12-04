import Case from './Case';

export default class Board {
  board: Case[][];

  rowSize: number;

  columnSize: number;

  constructor(board: number[][]) {
    this.rowSize = board[0].length;
    this.columnSize = board.length;
    this.board = new Array(this.columnSize);

    for (let columnIdx = 0; columnIdx < this.columnSize; columnIdx += 1) {
      const newRow = new Array(this.rowSize);
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

  isFinished() {
    return true;
  }

  mark(number: number) {
    this.board.forEach((row) => {
      row.forEach((c) => {
        if (c.number === number) {
          c.mark();
        }
      });
    });
  }
}
