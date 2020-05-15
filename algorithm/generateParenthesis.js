var generateParenthesis = function(n) {
    if (n === 0) {
      return [];
    }
    let arr = ['(', ')'];
    let allArray = [];
    let finalResultArray = [];
    for (let i = 0; i < 2 * n; i++) {
      if (allArray.length === 0) {
        allArray = arr;
      } else {
        let tempArray = [];
        for (let item of allArray) {
          for (let subItem of arr) {
            tempArray.push(item + subItem);
          }
        }
        allArray = tempArray;
      }
    }
    console.log(allArray);
    for (let item of allArray) {
      let matchArray = item.match(/\(/g);
      if (matchArray && matchArray.length === 3) {
        if (isValid(item)) {
          finalResultArray.push(item);
        }
      }
    }
    console.log(finalResultArray);

};

generateParenthesis(3);

function isValid(s) {
  let stack = [];
  let result = true;
  let inputArray = Array.from(s);
  for (let item of inputArray) {
      if ('(' === item) {
          stack.push(item);
      } else {
          if (!stack.pop()) {
              result = false;
              break;
          }
    }
  }
  result = stack.length ? false : result;
  return result;
};
