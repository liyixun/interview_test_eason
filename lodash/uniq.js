function uniq(array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!tempArray.length) {
      tempArray.push(array[i]);
    } else {
      let findResult = tempArray.find(item => {
        return array[i] === item;
      });
      if (!findResult) {
        tempArray.push(array[i]);
      }
    }
  }
  return tempArray;
}


let result = uniq([2, 3, 4, 4, 2, 7]);
console.log(result);
