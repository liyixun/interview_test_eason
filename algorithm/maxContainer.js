function getMaxContainerSize(array) {
  if (array.length === 2) {
    return Math.min(array[0], array[1]);
  }

  return dp(array.length - 1);

  function dp(i) {
    if (i === 1) {
      return Math.min(array[0], array[1]);
    }
    let sizeArray = [];
    for (let j = 0; j < i; j++) {
      sizeArray.push(getSizeBetweenTwoCount(j, i));
    }
    let result = Math.max(dp(i - 1), ...sizeArray);
    return result;
  }

  function getSizeBetweenTwoCount(i, j) {
    return Math.abs(i - j) * Math.min(array[i], array[j]);
  }
}

let result = getMaxContainerSize([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);
