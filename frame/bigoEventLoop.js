(new Promise((resolve) => {
  console.log('promise1 start');
  resolve(true);
})).then(res => {
  console.log('then 1 - 1')
  new Promise(resolve => {
    console.log('promise2 start');
    resolve(true)
  }).then(res1 => {
    console.log('then 1 - 2');
  }).then(res2 => {
    console.log('then 1 - 3');
  }).then(res3 => {
    console.log('then 1 - 4');
  });
}).then(res => {
  console.log('then 2 - 1')
}).then(res => {
  console.log('then 3 - 1')

});
