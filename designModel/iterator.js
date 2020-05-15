// 内部迭代器
// function each(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(i,  arr[i]);
//     }
// }

// each([1, 2, 3], function(i, n) {
//     console.log(i);
//     console.log(n);
// });

// 外部迭代器
const iterator = function(arr) {
    let current = 0;
    const next = function() {
        current = current + 1;
    }
    const done = function() {
        return current >= arr.length;
    }
    const value = function() {
        return arr[current];
    }
    return {
        next, done, value
    }
}

const arr1 = [1, 2 ,3]
const arr2 = [1, 2, 3]
const iterator1 = iterator(arr1)
const iterator2 = iterator(arr2)

const compare = function(iterator1, iterator2) {
    while (!iterator1.done() && !iterator2.done()) {
        if (iterator1.value() !== iterator2.value()) {
            console.log('两数组不等')
            return ;
        }
        iterator1.next();
        iterator2.next();
    }
    console.log('两数组相等')
}

compare(iterator1, iterator2);
