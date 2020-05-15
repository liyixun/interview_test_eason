/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var soryArray = [];
var len = 0;
var result = [];

var combinationSum2 = function(candidates, target) {
  soryArray = candidates.sort((a, b) => {
    return a - b;
  });
  len = soryArray.length;
  findCombinationResult(target, 0, new Stack());
  return result;
};

var findCombinationResult = function(target, startIndex, stack) {
  if (target === 0) {
    pushToResult(stack.toArray());
    return ;
  }
  if (startIndex >= len) {
    return ;
  }
  for (let i = startIndex; i < len && target - soryArray[i] >= 0; i++) {
    stack.push(soryArray[i]);
    findCombinationResult(target - soryArray[i], i + 1, stack);
    stack.pop();
  }
};

var pushToResult = function(array) {
  if (!result.length) {
    result.push(array);
  } else {
    let checkRepeatResult = false;
    for (let arrItem of result) {
      if (arrItem.length !== array.length) {
        continue;
      } else {
        let currentResult = true;
        for (let i = 0; i < array.length; i++) {
          if (arrItem[i] !== array[i]) {
            currentResult = false;
            break;
          }
        }
        if (currentResult) {
          checkRepeatResult = true;
          break;
        }
      }
    }
    if (!checkRepeatResult) {
      result.push(array);
    }
  }
};

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  toArray() {
    return Array.from(this.items);
  }

}

let respResult = combinationSum2([2,5,2,1,2], 5);
console.log(respResult);
