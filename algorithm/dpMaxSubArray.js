/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dpList = [];
  function dp(i) {
    if (i === 0) {
      dpList[i] = nums[i];
      return dpList[i];
    }
    if (i === 1) {
      dpList[i] = Math.max(nums[0], nums[1], nums[0] + nums[1]);
      return dpList[i];
    }
    let tempResult = typeof dpList[i - 1] !== 'undefined' ? dpList[i - 1] : dp(i - 1);
    dpList[i] = Math.max(tempResult, tempResult + nums[i], nums[i]);
    return dpList[i];
  }
  if (nums.length) {
    dp(nums.length - 1);
    return dpList[nums.length - 1];
  } else {
    return 0;
  }
};

let array = [-2,1,-3,4,-1,2,1,-5,4];
let result = maxSubArray(array);
console.log(result);

