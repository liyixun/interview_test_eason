/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let totalMaxSum = null;
  for (let i = 1; i <= nums.length; i++) {
    let currentMax = null;
    for (let j = 0; j <= nums.length - i; j++) {
      let tempArray = nums.slice(j, j + i);
      let tempSum = tempArray.reduce((a, b) => a + b);
      if (currentMax === null) {
        currentMax = tempSum;
      } else {
        if (currentMax < tempSum) {
          currentMax = tempSum
        }
      }
    }
    if (totalMaxSum === null) {
      totalMaxSum = currentMax;
    } else {
      if (totalMaxSum < currentMax) {
        totalMaxSum = currentMax
      }
    }
  }

  return totalMaxSum;
};

// [索引：{长度： 最大值}]
var maxSubArray1 = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    let maxNum = nums[0];
    if (maxNum < nums[1]) {
      maxNum = nums[1];
    }
    if (maxNum < (nums[0] + nums[1])) {
      maxNum = nums[0] + nums[1];
    }
    console.log(maxNum);
    return maxNum;
  }
  let currentMax = null;
  let countArray = [];
  nums.forEach(numItem => {
    if (currentMax === null) {
      currentMax = numItem
    }
    if (numItem > currentMax) {
      currentMax = numItem;
    }
    countArray.push({1: numItem});
  });
  for (let i = 2; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length - i; j++) {
      countArray[j][i] = countArray[j][i - 1] + countArray[i - 1][1];
      if (countArray[j][i] > currentMax) {
        currentMax = countArray[j][i];
      }
    }
    console.log(`----------${i}------------`);
    console.log(countArray);
  }
  // console.log(countArray);
  console.log(currentMax);
  return currentMax;
};

var maxSubArray2 = function (nums) {
  let currentMax = null;
  let countArray = [[]];
  nums.forEach((numItem, index) => {
    if (currentMax === null) {
      currentMax = numItem
    }
    if (numItem > currentMax) {
      currentMax = numItem;
    }
    countArray[0].push(numItem);
  });
  for (let i = 1; i < nums.length; i++) {
    countArray.push([]);
    for (let j = 0; j < nums.length - i; j++) {
      countArray[i][j] = countArray[i - 1][j] + countArray[0][i];
      if (countArray[i][j] > currentMax) {
        currentMax = countArray[i][j];
      }
    }
  }
  console.log(countArray);
  console.log(currentMax);


};

var maxSubArra3 = function (nums) {
  if (!nums.length) return null;
  let max = nums[0], record = nums[0];
  for (let i = 1; i < nums.length; i++) {
    record = Math.max(record + nums[i], nums[i]);
    if (record > max) max = record;
  }
  console.log(max);
  return max
};

var maxSubArra4 = function(nums) {
  if (!nums.length) {
    return null;
  }
  function dp(i) {
    if (i === 0) {
      return nums[0];
    }
    let temp = dp(i - 1);
    if (temp > 0) {
      if (nums[i] > 0) {
        return nums[i] + temp;
      } else {
        return temp;
      }
    } else {
      if (nums[i] > 0) {
        return nums[i];
      } else {
        return Math.max(nums[i], temp);
      }
    }
  }
  let result = dp(nums.length - 1);
  console.log(`result: ${result}`);
  return result;
};

var maxSubArray = function(nums) {
  const dp = [];
  let res = (dp[0] = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i];
    if (dp[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};


// [-2,1,-3,4,-1,2,1,-5,4]
// [1,2]
//[8,-19,5,-4,20]
let result = maxSubArray([8,-19,5,-4,20]);
console.log(result);

// function getMaxResult(nums) {
//   let maxResult = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > maxResult) {
//       maxResult = nums[i];
//     }
//   }
//   return maxResult;
// }



