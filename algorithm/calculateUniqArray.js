/**
 * 第 142 题：（算法题）求多个数组之间的交集（阿里）
 * 思路： 取长度最小那个数组，然后去判断数组里面的项是否在其他所有数组里面都存在
 */

function calculateUniqArray() {
  let arrayList = arguments;
  let minArray = arrayList[0];
  let uniqList = [];
  for (let array of arrayList) {
    if (array.length < minArray.length) {
      minArray = array;
    }
  }
  for (let item of minArray) {
    let existResult = true;
    for (let array of arrayList) {
      let findResult = array.find(arrayItem => {
        return arrayItem === item;
      });
      existResult = existResult && findResult;
      if (!existResult) {
        break;
      }
    }
    if (existResult) {
      uniqList.push(item);
    }
  }
  return uniqList;
}

let array1 = [9, 3, 8, 7, 4, 59, 8, 3, 7];
let array2 = [38, 74, 5, 9, 4, 3, 8, 47, 5];
let array3 = [3, 8, 9, 7, 45, 93, 84, 75];
let array4 = [9, 4, 8];
let array5 = [9, 4];

let uniqList = calculateUniqArray(array1, array2, array3, array4, array5);
// console.log(uniqList);


function intersect(...arg) {
  return arg.reduce((com, next) => com.filter(item => next.includes(item)));
}

let intersectList = intersect(array1, array2, array3, array4, array5);
console.log(intersectList);
