// 策略模式
const strategy = {
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    },
    'C': function(salary) {
        return salary * 1;
    }
};

function calculate(level, salary) {
    return strategy[level](salary);
}

let money = calculate('A', 10000);
console.log(money);

// const S = function(salary) {
//     return salary * 4
//   }
  
//   const A = function(salary) {
//     return salary * 3
//   }
  
//   const B = function(salary) {
//     return salary * 2
//   }
  
//   const calculateBonus = function(func, salary) {
//     return func(salary)
//   }
  
//   calculateBonus(A, 10000) 