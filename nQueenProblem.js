const stepCheck = (board, row, col) => {
  // vertical
  for (let i = 0; i < board.length; i++) {
    if (board[i][col]) return false;
  }

  // horizontal
  for (let i = 0; i < board.length; i++) {
    if (board[row][i]) return false;
  }

  // check for upper right diag
  for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j]) return false;
  }

  // check for upper left diag
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // check for lower left diag
  for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
    if (board[i][j]) return false;
  }

  // check for lower right diag
  for (let i = row, j = col; i < board.length && j < board.length; i++, j++) {
    if (board[i][j]) return false;
  }

  return true;
};

const allBoards = [];
const nQueenProblems = (board, row) => {
  if (row === board.length) {
    let newBoard = board.map((row) => row.join(" "));
    allBoards.push(newBoard);
    return true;
  }

  for (let col = 0; col < board.length; col++) {
    if (stepCheck(board, row, col)) {
      board[row][col] = 1;
      nQueenProblems(board, row + 1);
      board[row][col] = 0;
    }
  }
};

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

nQueenProblems(board, 0);
console.log(`There are total ${allBoards.length} ways.`);
console.log(allBoards);
