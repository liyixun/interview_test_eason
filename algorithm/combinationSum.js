const { Stack } = require('../dataStructure/stack');
var res = [];
var sortArray = [];
var len = 0;

var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => {
    return a - b;
  });
  sortArray = candidates;
  len = candidates.length;
  findCombinationSum(target, 0, new Stack());
  return res;
};

var findCombinationSum = function(residue, start, stack) {
  if (residue === 0) {
    res.push(stack.toArray());
    return ;
  }
  for (let i = start; i < len && residue - sortArray[i] >= 0; i++) {
    stack.push(sortArray[i]);
    findCombinationSum(residue - sortArray[i], i, stack);
    stack.pop();
  }

};



let result = combinationSum([2,3,5], 8);
console.log(result);

