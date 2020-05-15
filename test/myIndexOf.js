function myIndexOf(array, value, fromIndex) {
  if (fromIndex >= array.length) {
    return -1;
  }
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(myIndexOf([1, 3, 4, 9], 31, 0));

