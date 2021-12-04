import Board from './Board';

export function whoWinSooner(boardsRaw: number[][][], draws: number[]) {
  const boards: Board[] = [];
  boardsRaw.forEach((board) => {
    boards.push(new Board(board));
  });

  let idxWinSooner = boards.length + 1;
  let minLoop = draws.length + 1;
  boards.forEach((board, index) => {
    const currBoardLoopToWin = board.calculateWin(draws);
    if (currBoardLoopToWin < minLoop) {
      idxWinSooner = index;
      minLoop = currBoardLoopToWin;
    }
  });
  return boards[idxWinSooner];
}

export function whoWinLast(boardsRaw: number[][][], draws: number[]) {
  const boards: Board[] = [];
  boardsRaw.forEach((board) => {
    boards.push(new Board(board));
  });

  let idxWinLast = -1;
  let maxLoop = 0;
  boards.forEach((board, index) => {
    const currBoardLoopToWin = board.calculateWin(draws);
    if (currBoardLoopToWin > maxLoop) {
      idxWinLast = index;
      maxLoop = currBoardLoopToWin;
    }
  });
  return boards[idxWinLast];
}
