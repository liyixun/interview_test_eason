/*
已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */

function flatAndSort(array) {
  let flatArray = array.flat(Number.MAX_VALUE);
  let set = new Set(flatArray);
  let tempArray = Array.from(set);
  return tempArray.sort((a, b) => a - b);
}

let result = flatAndSort([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]);
console.log(result);
