function matrixCount(i, j) {
  let dpList = [];
  for (let k = 0; k <= i; k++) {
    dpList.push([]);
    for (let y = 0; y <= j; y++) {
      dpList[k][y] = '';
    }
  }
  console.log(dpList);

  function dp(i, j) {
    if (i === 0 && j === 0) {
      dpList[i][j] = 0;
      return 0;
    }
    if (i === 0 || j === 0) {
      dpList[i][j] = 1;
      return 1;
    }
    let tempResult1 = dpList[i][j - 1] !== '' ? dpList[i][j - 1] : dp(i, j - 1);
    let tempResult2 = dpList[i - 1][j] !== '' ? dpList[i - 1][j] : dp(i - 1, j);
    dpList[i][j] = tempResult1 + tempResult2;
    return dpList[i][j]
  }
  dp(i, j);
  console.log(dpList);
  return dpList[i][j];
}

let result = matrixCount(8, 8);
console.log(result);






