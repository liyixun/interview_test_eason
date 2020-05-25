/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  let sortArray = nums.sort((a, b) => b - a);
  let sum = getArraySum(sortArray);
  let resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    resultArray.push(nums[i]);
    let tempSum = getArraySum(resultArray);
    if (tempSum > sum - tempSum) {
      break;
    }
  }
  return resultArray;

  function getArraySum(array) {
    let sum = 0;
    array.forEach(item => {
      sum += item;
    });
    return sum;
  }

};

let result = minSubsequence([4,4,7,6,7]);
console.log(result);
