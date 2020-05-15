

var permuteUnique = function(nums) {
  let resultList = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let arr = Array.from(nums);
      let tempItem = arr[i];
      arr[i] = arr[j];
      arr[j] = tempItem;
      pushToArray(resultList, arr);
    }
  }
  return resultList
};

var pushToArray = function (totalArray, array) {
  let canPush = true;
  for (let item of totalArray) {
    let tempResult = true;
    for (let i = 0; i < array.length; i++) {
      if (item[i] !== array[i]) {
        tempResult = false;
        break;
      }
    }
    if (tempResult) {
      canPush = false;
      break;
    }
  }
  if (canPush) {
    totalArray.push(array);
  } else {
    console.log('不能添加的数组');
    console.log(array);
  }
};

console.log(permuteUnique([1, 3, 2]));
