/*
https://leetcode-cn.com/problems/binary-watch/
 */

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const hourArray = [1, 2, 4, 8];
  const minuteArray = [1, 2, 4, 8, 16, 32];

  if (num === 0) {
    return ['0:00'];
  }

  let endIndex = hourArray.length < num ? hourArray.length : num;
  let hourResultList = [], minuteResultList = [];
  let resultSet = new Set();

  for (let i = 0; i <= endIndex; i++) {
    let n = num - i;
    let tempHourList = [...hourArray], tempMinuteList = [...minuteArray];
    hourResultList = [];
    minuteResultList = [];
    backtracking(tempHourList, [], hourResultList, i, 'HOUR');
    backtracking(tempMinuteList, [], minuteResultList, n, 'MINUTE');
    batchFormatResult(hourResultList, minuteResultList);
  }

  return Array.from(resultSet);

  function backtracking(array, tempArr, resultList, length, type) {
    if (tempArr.length === length && checkValid(type, tempArr)) {
      let resultItem = [...tempArr];
      resultList.push(resultItem);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      let item = array.shift();
      tempArr.push(item);
      backtracking(array, tempArr, resultList, length, type);
      tempArr.pop();
      array.push(item);
    }
  }

  function batchFormatResult(inputHourArray, inputMinuteArray) {
    for (let i = 0; i < inputHourArray.length; i++) {
      for (let j = 0; j < inputMinuteArray.length; j++) {
        let singleResult = formatResult(inputHourArray[i], inputMinuteArray[j]);
        resultSet.add(singleResult);
      }
    }
  }

  function formatResult(inputHourArray, inputMinuteArray) {
    let hourResult = inputHourArray.length ? inputHourArray.reduce((a, b) => a + b) : '0';
    let minuteResult = inputMinuteArray.length ? inputMinuteArray.reduce((a, b) => a + b) : '00';
    minuteResult = minuteResult + '';
    minuteResult = minuteResult && minuteResult.length === 2  ? minuteResult : '0' + minuteResult;
    return hourResult + ':' + minuteResult;
  }

  function checkValid(type, list) {
    return type === 'HOUR' ? checkHourValid(list) : checkMinuteValid(list);
  }

  function checkHourValid(list) {
    return list && list.length ? list.reduce((a, b) => a + b) < 12 : true
  }

  function checkMinuteValid(list) {
    return list && list.length ? list.reduce((a, b) => a + b) < 60 : true;
  }

};

let finalResult = readBinaryWatch(2);
console.log(finalResult);
