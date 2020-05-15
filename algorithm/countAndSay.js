/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let startNum = null;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      startNum = "1";
    } else {
      let startArray = Array.from(startNum);
      let str = "";
      let char = null, len = 1;
      for (let j = 0; j < startArray.length; j++) {
        if (char === null) {
          char = startArray[j];
        } else {
          if (char === startArray[j]) {
            len++;
          } else {
            str += (len + char);
            char = startArray[j];
            len = 1;
          }
        }
        if (j === startArray.length - 1) {
          str += (len + char);
        }
      }
      startNum = str;
    }
  }
  return startNum;
};

let result = countAndSay(4);
console.log(result);
