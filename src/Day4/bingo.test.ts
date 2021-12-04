import Board from './Board';
import Case from './Case';

describe('Board', () => {
  it('should return the case when the number is present is the board', () => {
    const board: Board = new Board([
      [1, 2, 3],
      [4, 6, 7],
      [8, 9, 10]
    ]);
    const expected = 7;
    const actual = board.has(7);
    expect(actual?.number).toBe(expected);
  });
  it('should return null when the number is not present is the board', () => {
    const board: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    const expected = null;
    const actual = board.has(11);
    expect(actual).toBe(expected);
  });
  it('should have 7 marked when 7 is drawn', () => {
    const board: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    const expectedCase = new Case(7);
    expectedCase.mark();
    board.mark(7);
    const actual = board.has(7);
    expect(actual).toStrictEqual(expectedCase);
  });
  it('should be finished when I have a full row marked', () => {
    const board: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    board.mark(1);
    board.mark(2);
    board.mark(3);
    const actual = board.isFinished();
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });
});
