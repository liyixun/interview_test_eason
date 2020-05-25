/**
 * promise
 * promise.prototype.then
 * promise.resolve
 * promise.reject
 * promise.all
 * promise.race
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function EasonPromise(inputGeneratorFun) {
  let self = this;
  self.status = PENDING;
  self.onFulfilledCallbacks = null;
  self.onRejectedCallbacks = null;
  self.value = null;
  self.error = null;

  const resolve = function (value) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED;
        self.value = value;
        self.onFulfilledCallbacks.forEach(callback => callback(self.value));
        // self.onFulfilled(self.value);
      }, 0);
    } else {
      return ;
    }
  };

  const reject = function (error) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED;
        self.error = error;
        self.onRejectedCallbacks.forEach(callback => callback(self.error));
        // self.onRejected(self.error);
      }, 0);
    } else {
      return ;
    }
  };

  inputGeneratorFun(resolve, reject);

}

EasonPromise.prototype.then = function (fulfilledFun, rejectedFun) {
  let self = this;
  if (this.status === FULFILLED) {
    fulfilledFun(this.value);
  } else if (this.status === REJECTED) {
    rejectedFun(this.error);
  } else {          // PENDING 链式调用每次都要返回一个新的promise
    return new EasonPromise((resolve, reject) => {
      self.onFulfilledCallbacks.push((value) => {
        try {
          let x = fulfilledFun(value);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallbacks.push((error) => {
        try {
          let x = rejectedFun(error);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
    });

  }
  return this;
};

// 在其他then执行完之后执行callback
EasonPromise.prototype.finally = function (callback) {
  this.then(value => {
    return EasonPromise.resolve(callback()).then(() => {
      return value;
    });
  }, error => {
    return EasonPromise.resolve(callback()).then(() => {
      throw error;
    });
  });
};

// catch就只一个onRejected的语法糖
EasonPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

EasonPromise.resolve = function (param) {
  if (param instanceof EasonPromise) return param;
  return new EasonPromise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      param.then(resolve, reject);
    } else {
      resolve(param);
    }
  });
};

EasonPromise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

EasonPromise.all = function (promiseList) {
  return new Promise((resolve, reject) => {
    let len = promiseList.length;
    let finishRequestCount = 0;
    let result = [];
    if (len === 0) {
      resolve(result);
    }
    for (let i = 0; i < len; i++) {
      EasonPromise.resolve(promiseList[i]).then(value => {
        resultList[i] = value;
        finishRequestCount++;
        if (finishRequestCount === len) {
          resolve(resultList);
        }
      }).catch(error => {
        reject(error);
      });
    }

  });
};

EasonPromise.race = function (promiseList) {
  return new EasonPromise((resolve, reject) => {
    let len = promiseList.length;
    for (let i = 0; i < len; i++) {
      EasonPromise.resolve(promiseList[i]).then(value => {
        resolve(value);
        return ;
      }).catch(error => {
        reject(error);
        return ;
      });
    }
  });
};




