/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  console.log(this.nums);
  if (Array.isArray(this.nums) && Number.isInteger(i) && Number.isInteger(j) && this.nums.length >= i) {
    let startIndex = i >= 0 ? i : 0;
    let endIndex = (this.nums.length - 1) > j ? j : (this.nums.length - 1);
    let sumResult = 0;
    for (let k = startIndex; k <= endIndex; k++) {
      sumResult += this.nums[k];
    }
    return sumResult;
  } else {
    return 0;
  }

};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

let nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
var param_1 = obj.sumRange(2, 5);
console.log(param_1);

