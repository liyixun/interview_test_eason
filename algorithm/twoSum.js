var twoSum1 = function(nums, target) {
  let arrayLength = nums.length;
  let resultArray = [];
  for (let i = 0; i < arrayLength; i++) {
      for (let j = i + 1; j < arrayLength; j++) {
          if (nums[i] + nums[j] === target) {
              resultArray = [i, j];
              break;
          }
      }
  }
  return resultArray;
}

console.log(twoSum1([3, 2, 7, 4], 6));