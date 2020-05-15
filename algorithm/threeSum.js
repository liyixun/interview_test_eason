var threeSum = function(inputNums) {
  if (inputNums.length < 3) {
      return [];
  }
  let nums = inputNums.sort((a, b) => {
      return a - b;
  });
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      let sum = 0 - nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] === nums[j - 1]) {
            continue;
          }
          for (let k = j + 1; k < nums.length; k++) {
              if (nums[k] === nums[k - 1]) {
                continue;
              }
              if (sum === nums[j] + nums[k]) {
                  let array = [nums[i], nums[j], nums[k]];
                  // let checkRepeatResult = result.find(item => {
                  //   return item[0] === nums[i] || item[1] === nums[j] || item[2] === nums[k];
                  // });
                  // if (!checkRepeatResult) {
                    result.push([nums[i], nums[j], nums[k]]);
                    break;
                  // }
              }
              if (sum < nums[j] + nums[k]) {
                  break;
              }
          }
      }
  }
  return result;
};


// [0,0,0,0]
// [-1, 0, 1, 2, -1, -4]
let result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);