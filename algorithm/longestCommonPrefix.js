var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let minLength = strs[0].length;
  let minStr = strs[0];
  let longestPrefix = "";
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    if (str.length < minLength) {
      minLength = str.length;
      minStr = str;
    }
  }
  for (let i = minLength - 1; i > 0; i--) {
    let subStr = minStr.substr(0, i);
    let allResult = true;
    for (let i = 0; i < strs.length; i++) {
      let str = strs[i];
      if (!str.startsWith(subStr)) {
        allResult = false;
        break;
      }
    }
    if (allResult) {
      longestPrefix = subStr;
      break;
    }
  }
  return longestPrefix;
};

let result1 = longestCommonPrefix(["dog","racecar","car"]);
console.log(result1);

