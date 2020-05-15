/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 贪心算法，不合逻辑
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => b - a);
  console.log(coins);
  let totalCoinCount = 0;
  for (let i = 0; i < coins.length; i++) {
    totalCoinCount += parseInt((amount/coins[i]).toFixed(2));
    amount = amount%coins[i];
  }
  if (amount > 0) {
    return -1;
  } else {
    return totalCoinCount;
  }
};

/**
 * 回溯
 * @param coins
 * @param amount
 */
var coinChangeBacktracking = function(coins, amount) {
  coins.sort((a, b) => b - a);
  let maxCountMap = new Map();
  let resultList = [];
  coins.map(item => {
    maxCountMap.set(item, parseInt(amount/item));
  });

  function backtracking(currentAmount, currentCount, coinList) {
    if (amount === currentAmount) {
      resultList.push(currentCount);
      return ;
    }
    if (amount < currentAmount) {
      return ;
    }
    for (let i = 0; i < coinList.length; i++) {
      for (let j = maxCountMap.get(coinList[i]); j > 0; j--) {
        let tempAmount = currentAmount + coinList[i] * j;
        let tempCurrentCount = currentCount + j;
        let coin = coinList.shift();
        backtracking(tempAmount, tempCurrentCount, coinList);
      }
    }
  }

  backtracking(0, 0, coins);
  console.log(resultList);
  return resultList;

};

/**
 * 动态规划
 * @param coins
 * @param amount
 */
var coinChangeDP = function(coins, amount) {
  coins.sort((a, b) => b - a);



  function dp(currentAmount) {
    console.log(`计算${currentAmount}`);
    if (currentAmount === 0) {
      return 0;
    }
    if (currentAmount < 0) {
      return ;
    }
    let compareArray = [];
    coins.forEach(item => {
      compareArray.push(dp(currentAmount - item));
    });
    return getMinResult(compareArray) + 1;
  }

  let result = dp(amount);
  console.log(result);
  return result;

  function getMinResult(array) {
    let min = null;
    array.forEach(item => {
      if (min === null && Number.isInteger(item)) {
        min = item;
      }
      if (Number.isInteger(item) && item < min) {
        min = item;
      }
    });
    return min;
  }

};



let result = coinChangeDP([186,419,83,408], 6249);
console.log(result);
