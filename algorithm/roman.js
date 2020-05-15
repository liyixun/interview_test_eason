/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = "";
  let tempNum = num;
  constNums.forEach(constNum => {
    let tempResult1 = parseInt(tempNum / constNum.key);
    let subResult = tempResult1 * constNum.key;
     if (tempResult1) {
      for (let i = 0; i < tempResult1; i++) {
        result += constNum.value;
      }
      tempNum -= subResult;
    }
  });
  return result
};

const constNums = [
  {key: 1000, value: 'M'},
  {key: 900, value: 'CM'},
  {key: 500, value: 'D'},
  {key: 400, value: 'CD'},
  {key: 100, value: 'C'},
  {key: 90, value: 'XC'},
  {key: 50, value: 'L'},
  {key: 40, value: 'XL'},
  {key: 10, value: 'X'},
  {key: 9, value: 'IX'},
  {key: 5, value: 'V'},
  {key: 4, value: 'IV'},
  {key: 1, value: 'I'},
];


var romanResult = intToRoman(1994);
console.log(romanResult);
