// 四皇后问题
var getFourQueueResult = function() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let arr = getEmptyArray();
      let queueCount = 1;
      arr[i][j] = 1;

    }
  }
};


var getEmptyArray = function () {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
};





