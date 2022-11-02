const isSafe = (board, row, col, number) => {
  // checking row wise
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === number) {
      return false;
    }
  }

  // checking column wise
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === number) {
      return false;
    }
  }

  // checking sudoku section
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === number) {
        return false;
      }
    }
  }

  return true;
};

const sudokuSolver = (board, row, col) => {
  // exit conditions
  if (row === board.length) {
    return true;
  }

  // setting next row
  let nrow;
  let ncol;
  if (col !== board.length - 1) {
    nrow = row;
    ncol = col + 1;
  } else {
    nrow = row + 1;
    ncol = 0;
  }

  // recurrsion backtracking logic
  if (board[row][col] !== ".") {
    if (sudokuSolver(board, nrow, ncol)) {
      return true;
    }
  } else {
    for (let number = 1; number <= 9; number++) {
      if (isSafe(board, row, col, number.toString())) {
        board[row][col] = number.toString();
        if (sudokuSolver(board, nrow, ncol)) {
          return true;
        } else {
          board[row][col] = ".";
        }
      }
    }
  }

  return false;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

sudokuSolver(board, 0, 0);
console.log(board);
