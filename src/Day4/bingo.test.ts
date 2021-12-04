import Board from './Board';
import Case from './Case';
import { whoWinLast, whoWinSooner } from './bingo';

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
    const board = new Board([
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
  it('should not be finished when I have dont have a full row marked', () => {
    const board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    const actual = board.isFinished();
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });
  it('should be finished when I have a full column marked', () => {
    const board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    board.mark(1);
    board.mark(4);
    board.mark(7);
    const actual = board.isFinished();
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });
});

describe('Squid', () => {
  it('should tell me it could win in 3 draws from the draws [1,2,3]', () => {
    const board: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    const expected = 3;
    const actual = board.calculateWin([1, 2, 3, 4, 5]);
    expect(actual).toBe(expected);
  });
  it('should return board1 since it is the one that gonna win sooner', () => {
    const board1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const board2 = [
      [1, 12, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const expected = new Board(board1);
    expected.mark(1);
    expected.mark(2);
    expected.mark(3);
    const actual = whoWinSooner([board1, board2], [1, 2, 3, 12]);
    expect(actual).toStrictEqual(expected);
  });
  it('should return board2 since it is the one that gonna win sooner', () => {
    const board1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const board2 = [
      [1, 12, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const expected = new Board(board2);
    expected.mark(1);
    expected.mark(12);
    expected.mark(3);
    const actual = whoWinSooner([board1, board2], [1, 12, 3, 2]);
    expect(actual).toStrictEqual(expected);
  });
  it('should return all unmarked case', () => {
    const board1: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    board1.mark(1);
    board1.mark(2);
    board1.mark(3);
    board1.mark(4);
    board1.mark(5);
    board1.mark(6);
    board1.mark(7);
    board1.mark(8);

    const expected = [new Case(9)];
    const actual: Case[] = board1.getUnmarkedCases();
    expect(actual[0].number).toStrictEqual(expected[0].number);
  });
  it('should calculate 117 power', () => {
    const board1: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    board1.mark(1);
    board1.mark(2);
    board1.mark(3);

    const expected = (4 + 5 + 6 + 7 + 8 + 9) * 3;
    const actual = board1.calculatePower();
    expect(actual).toStrictEqual(expected);
  });
  it('should calculate 231 of power', () => {
    const board1: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    board1.mark(1);
    board1.mark(4);
    board1.mark(7);

    const expected = (2 + 3 + 5 + 6 + 8 + 9) * 7;
    const actual = board1.calculatePower();
    expect(actual).toBe(expected);
  });
  it('should calculate 182 of power', () => {
    const board: Board = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    board.mark(2);
    board.mark(4);
    board.mark(8);
    board.mark(5);

    const expected = (1 + 3 + 6 + +7 + 9) * 5;
    const actual = board.calculatePower();
    expect(actual).toBe(expected);
  });
  it('should calculate 336 of power', () => {
    const board: Board = new Board([
      [1, 2, 3, 10],
      [4, 5, 6, 11],
      [7, 8, 9, 12],
      [13, 14, 15, 16]
    ]);
    board.mark(5);
    board.mark(6);
    board.mark(11);
    board.mark(16);
    board.mark(10);
    board.mark(4);

    const expected = (1 + 2 + 3 + 7 + 8 + 9 + 12 + 13 + 14 + 15) * 4;
    const actual = board.calculatePower();
    expect(actual).toBe(expected);
  });
  it('should calculate 4512 of power', () => {
    const board: Board = new Board([
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7]
    ]);
    board.markAll([7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24]);

    const expected = 4512;
    const actual = board.calculatePower();
    expect(actual).toBe(expected);
  });
  it('should calculate 3912 of power', () => {
    const board: Board = new Board([
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ]);
    board.markAll([7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24]);

    const expected = 3912;
    const actual = board.calculatePower();
    expect(actual).toBe(expected);
  });
  it('should calculate 4488 of power', () => {
    const board: Board = new Board([
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6]
    ]);
    board.markAll([7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24]);

    const expected = 4488;
    const actual = board.calculatePower();
    expect(actual).toBe(expected);
  });

  it('should calculate 4512 of power', () => {
    const draws = [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1
    ];
    const boards = [
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
      ],

      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6]
      ],

      [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7]
      ]
    ];
    const actual = whoWinSooner(boards, draws).calculatePower();
    const expected = 4512;
    expect(actual).toBe(expected);
  });

  it('should calculate 1924 of power', () => {
    const draws = [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1
    ];
    const boards = [
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
      ],

      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6]
      ],

      [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7]
      ]
    ];
    const actual = whoWinLast(boards, draws).calculatePower();
    const expected = 1924;
    expect(actual).toBe(expected);
  });
});
