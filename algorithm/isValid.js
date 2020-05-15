/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) {
      return true;
  }
  let stack = [];
  let result = true;
  let inputArray = Array.from(s);
  for (let item of inputArray) {
      if (['(', '[', '{'].includes(item)) {
          stack.push(item);
      } else {
          let tempItem = obj[item];
          let popItem = stack.pop();
          if (tempItem !== popItem) {
              result = false;
              break;
          }
      }
  }
  result = stack.length ? false : result;
  return result;
};

let obj = {
  '(': ')',
  '[': ']',
  '{': '}'
};

let validResult = isValid("()");
console.log(validResult);
