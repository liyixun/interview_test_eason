/**
 * push(element):添加一个或是几个新元素到栈顶。

 pop():移除栈顶的元素，同时返回被移除元素。

 peek():返回栈顶的元素，但并不对栈顶的元素做出任何的修改。

 isEmpty():检查栈内是否有元素，如果有返回true，没有返回false。

 clear():清除栈里的元素。

 size():返回栈的元素个数。

 print():打印栈里的元素。
 */


class Stack {

  constructor(array) {
    this.items = array || [];
  }

  isEmpty() {
    return !this.items.length
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (this.items.length) {
      return this.items[this.items.length - 1];
    }
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log('栈顶');
    for (let i = this.items.length - 1; i > 0; i--) {
      console.log(this.items[i]);
    }
    console.log('栈底');
  }

  toArray() {
    return Array.from(this.items);
  }
}

exports.Stack = Stack;
