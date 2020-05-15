var soryArray = [];
var len = 0;
var res = [];

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  soryArray = candidates.sort((a, b) => {
    return a - b;
  });
  len = soryArray.length;
  findCombinationSum(target, 0, new Stack());
  return res;
};

var findCombinationSum = function(target, start, stack) {
  if (target === 0) {
    res.push(stack.toArray());
    return ;
  }
  for (let i = start; i < len && target - soryArray[i] >= 0; i++) {
    stack.push(soryArray[i]);
    findCombinationSum(target - soryArray[i], i, stack);
    stack.pop();
  }

};

class Stack {
  constructor(array) {
    this.items = array || [];
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

console.log(combinationSum([2,3,5], 8));
