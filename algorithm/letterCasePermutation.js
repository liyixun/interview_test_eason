/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let endLength = S.length;
  let result = [];
  function backtracking(queue, result, temp = '', current = '') {
    temp += current;
    if (temp.length === endLength) {
      result.push(temp);
      return ;
    }
    for (let i = 0; i < queue.length; i++) {
      let item = queue.shift();
      if (item.toUpperCase() === item.toLowerCase()) {
        backtracking(queue, result, temp, item);
      } else {
        let q1 = [...queue];
        let q2 = [...queue];
        backtracking(q1, result, temp, item.toLowerCase());
        backtracking(q2, result, temp, item.toUpperCase());
      }
    }
  }
  backtracking(S.split(''), result, '', '');
  return result;
};

function letterCasePermutation1(S) {
  let result = [''];
  let wordList = S.split('');
  for (let word of wordList) {
    let tempResultList = [];
    for (let item of result) {
      if (word.toUpperCase() === word.toLowerCase()) {
        tempResultList.push(item + word);
      } else {
        tempResultList.push(item + word.toLowerCase());
        tempResultList.push(item + word.toUpperCase());
      }
    }
    result = tempResultList;
  }
  return result;
}

console.log(letterCasePermutation1("a1b2"));
