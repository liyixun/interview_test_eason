let array = [2,  4, 1,  3, 5];

function main() {
  // array.forEach(function(item) {
  //   consolePromise(item);
  // });
  for (let item of array) {
    await consolePromise(item);
  }
}


function consolePromise(i) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(i);
      resolve(i);
    }, 1000);
  });
}

main();
