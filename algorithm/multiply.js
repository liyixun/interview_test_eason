/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let arr1 = Array.from(num1);
  let arr2 = Array.from(num2);
  let caculateResultList = [];
  let finalResult = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    let tempArray = [];
    let addMore = 0;
    for (let k = 0; k < arr1.length - 1 - i; k++) {
      tempArray.unshift(0);
    }
    for (let j = arr2.length - 1; j >= 0; j--) {
      let tempResult = parseInt(arr1[i]) * parseInt(arr2[j]) + addMore;
      addMore = Number.parseInt(tempResult / 10);
      tempArray.unshift(tempResult % 10);
      if (j === 0 && addMore !== 0) {
        tempArray.unshift(addMore);
      }
    }
    caculateResultList.push(tempArray);
  }
  let maxLength = 0;
  for (let item of caculateResultList) {
    if (item.length > maxLength) {
      maxLength = item.length;
    }
  }

  for (let item of caculateResultList) {
    let addCount = maxLength - item.length;
    for (let i = 0; i < addCount; i++) {
      item.unshift(0);
    }
  }
  console.log(caculateResultList);

  let addMore = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    let addResult = 0;
    for (let item of caculateResultList) {
      addResult += item[i];
    }
    addResult += addMore;
    finalResult.unshift(addResult % 10);
    addMore = Number.parseInt(addResult / 10);
    if (i === 0 && addMore !== 0) {
      finalResult.unshift(addMore);
    }
  }

  return finalResult.join("");
};

console.log(multiply("999", "999"));

