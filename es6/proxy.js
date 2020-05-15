// var obj = new Proxy({}, {
//     get: function(target, key, receiver) {
//         console.log(`getting ${key}`)
//         return Reflect.get(target, key, receiver);
//     },
//     set: function(target, key, value, receiver) {
//         console.log(`setting ${key}`)
//         return Reflect.set(target, key, value, receiver);
//     }
// })

// obj.count = 1;
// obj.count++

// var proxy = new Proxy({}, {
//     get: function(target, property) {
//         return 35;
//     }
// });

// console.log(proxy.time);
// console.log(proxy.count);
// console.log(proxy.name);

// let obj = Object.create(proxy);
// console.log(obj.time)

// get方法拦截
// var person = {
//     name: '张三'
// };

// var proxy = new Proxy(person, {
//     get: function(target, property) {
//         if (property in target) {
//             return target[property];
//         } else {
//             throw ReferenceError(`Property ${property} does not exist`);
//         }
//     }
// });

// console.log(proxy.name)
// console.log(proxy.age)

// let proto = new Proxy({}, {
//     get: function(target, property, receiver) {
//         console.log(`GET ${property}`);
//         return target[property];
//     }
// })

// let obj = Object.create(proto);
// console.log(obj.foo)

// set方法拦截
// let validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('The age is not a integer')
//             }
//             if (value > 200) {
//                 throw new RangeError('The age seems invalid')
//             }
//         }
//         obj[prop] = value;
//     }
// }

// let person = new Proxy({}, validator);

// person.age = 100;
// console.log(person.age)
// person.age = 'young'
// person.age = 300

// 属性名第一个字符使用下划线开头，禁止外部使用
// const handler = {
//     get (target, key) {
//         invariant(key, 'get');
//         return target[key];
//     },
//     set (target, key, value) {
//         invariant(key, 'set');
//         target[key] = value
//     }
// }

// function invariant (key, action) {
//     if (key[0] === '_') {
//         throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//     }
// }

// const target = {};
// const proxy = new Proxy(target, handler);
// proxy._prop
// proxy._prop = 'C'

// apply方法
// var target = function() { return 'I am the target'; }
// var handler = {
//     apply: function(target, ctx, args) {
//         return 'I am the proxy';
//     }
// }

// var p = new Proxy(target, handler);
// let result = p();
// console.log(result)

// has方法
// var handler = {
//     has: function(target, key) {
//         if (key[0] === '_') {
//             return false;
//         }
//         return key in target
//     }
// }
// var target = { _prop: 'foo', prop: 'foo' }
// var proxy = new Proxy(target, handler);
// console.log('_prop' in proxy)
// console.log('prop' in proxy)

// construct()方法
// var p = new Proxy(function () {}, {
//     construct: function(target, args) {
//       console.log('called: ' + args.join(', '));
//       return { value: args[0] * 10 };
//     }
//   });
  
// (new p(1)).value

// deleteProperty()方法
var handler = {
    deleteProperty (target, key) {
      invariant(key, 'delete');
      delete target[key];
      return true;
    }
  };
  function invariant (key, action) {
    if (key[0] === '_') {
      throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
  }
  
  var target = { _prop: 'foo' };
  var proxy = new Proxy(target, handler);
  delete proxy._prop


