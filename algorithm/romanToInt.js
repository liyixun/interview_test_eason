var romanToInt = function(s) {
    let str = s, resultInt = 0;
    for (let i = 0; i < constNums.length; i++) {
      while(str.startsWith(constNums[i].value)) {
        resultInt += constNums[i].key;
        str = str.substr(constNums[i].value.length, str.length - constNums[i].value.length);
      }
    }
    return resultInt;
};

const constNums = [
  {key: 1000, value: 'M'},
  {key: 900, value: 'CM'},
  {key: 500, value: 'D'},
  {key: 400, value: 'CD'},
  {key: 100, value: 'C'},
  {key: 90, value: 'XC'},
  {key: 50, value: 'L'},
  {key: 40, value: 'XL'},
  {key: 10, value: 'X'},
  {key: 9, value: 'IX'},
  {key: 5, value: 'V'},
  {key: 4, value: 'IV'},
  {key: 1, value: 'I'},
];

let result = romanToInt("MCMXCIV");
console.log(result);
