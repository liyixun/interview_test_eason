var message = function (nums) {
  let dpList = [];
  function dp(i) {
    if (i === 0) {
      dpList[0] = nums[0];
      return dpList[0];
    }
    if (i === 1) {
      dpList[1] = Math.max(nums[0], nums[1]);
      return dpList[1];
    }
    let tempResult1 = typeof dpList[i - 1] !== "undefined" ? dpList[i - 1] : dp(i - 1);
    let tempResult2 = typeof dpList[i - 2] !== "undefined" ? dpList[i - 2] : dp(i - 2);
    dpList[i] = Math.max(tempResult1, tempResult2 + nums[i]);
    return dpList[i];
  }
  if (nums.length) {
    dp(nums.length - 1);
    return dpList[nums.length - 1];
  } else {
    return 0;
  }
};

var message1 = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let tempResult1 = 0, tempResult2 = 0;
  for (let i = 0; i < nums.length/2; i++) {
    tempResult1 += nums[2 * i];
    tempResult2 += nums[2 * i + 1] || 0;
  }
  return Math.max(tempResult1, tempResult2);
};


let testArray =  [2,7,9,3,1];
let result = message(testArray);
console.log(result);
