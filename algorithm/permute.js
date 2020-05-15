/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var enterNums = [];
var resultList = [];

var permute = function(nums) {
  enterNums = nums;
  findSingleItem(new Stack());
  return resultList;
};

var findSingleItem = function(stack) {
  let stackArray = stack.toArray();
  let restArray = findRestArray(stackArray);
  if (restArray.length === 0) {
    resultList.push(stackArray);
    return ;
  }
  for (let item of restArray) {
    stack.push(item);
    findSingleItem(stack);
    stack.pop();
  }
};

var findRestArray = function(arr) {
  let result = [];
  for (let item of enterNums) {
    let findResult = arr.find(num => {
      return num === item;
    });
    if (!findResult) {
      result.push(item);
    }
  }
  return result;
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

let printResult = permute([1,2,3]);
console.log(printResult);
