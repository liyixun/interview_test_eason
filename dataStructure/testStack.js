const { Stack } = require('./stack');

let stack = new Stack([3, 6, 7]);

stack.push(10);

console.log(stack.toArray());
console.log(stack.print());


