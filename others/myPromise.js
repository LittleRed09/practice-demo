const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise (fn){
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    // 存放回调
    this.onFulfilledCallback = []
    this.onRejectedCallback = []

    // 这里必须要用_this保存this，因为resolve()的调用环境是全局，其中的this指向global
    const _this = this;
    function resolve(value){
        if(_this.status === PENDING) {
            _this.value = value;
            _this.status = FULFILLED

            _this.onFulfilledCallback.forEach((onFulfilled) => {
                onFulfilled(_this.value)
            })
        }
    }

    function reject(reason){
        if(_this.status === PENDING) {
            _this.reason = reason;
            _this.status = REJECTED

            _this.onFulfilledCallback.forEach((onRejected) => {
                onRejected(_this.reason)
            })
        }
    };

    try {
        fn(resolve, reject)
    } catch (err) {
        reject(err)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected){
    if(this.status === FULFILLED) {
        onFulfilled(this.value)
    }

    if(this.status === REJECTED) {
        onRejected(this.reason)
    }

    // then是同步执行的，执行到then()时，promise状态可能还未改变，因此要用一个队列将回调函数存放起来，当resolve被调用时才触发
    // 本质上是一种发布订阅模式
    if(this.status === PENDING) {
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
    }

    
}

var promise1 = new MyPromise((resolve) => {
    resolve('request1 success');
  });
  
  promise1.then(function(value) {
    console.log(value);
  });
  
  var promise2 = new MyPromise((resolve, reject) => {
    reject('request2 failed');
  });
  
  promise2.then(function(value) {
    console.log(value);
  }, function(reason) {
    console.log(reason);
  });
  