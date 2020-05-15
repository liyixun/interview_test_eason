/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
      let arr = [];
      for (let j = 0; j < 9; j++) {
          if (board[i][j] !== ".") {
              if (-1 ===  arr.indexOf(board[i][j])) {
                  arr.push(board[i][j]);
              } else {
                  return false;
              }
          }
      }
  }
  for (let i = 0; i < 9; i++) {
      let arr = [];
      for (let j = 0; j < 9; j++) {
          let item = board[j][i];
          if (item !== ".") {
            if (-1 ===  arr.indexOf(item)) {
              arr.push(item);
            } else {
              return false;
            }
          }
      }
  }

  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          let arr = [];
          for (let k = 0; k < 3; k++) {
              for (let m = 0; m < 3; m++) {
                  let item = board[i * 3 + k][j * 3 + m];
                  if (item !== ".") {
                    if (-1 ===  arr.indexOf(item)) {
                      arr.push(item);
                    } else {
                      return false;
                    }
                  }
              }
          }
      }
  }

  return true;
};

let result = isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]]);
console.log(result);
