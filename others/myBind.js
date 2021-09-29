Function.prototype._bind = function (obj, ...args) {
    let self = this

    return function() {
        let bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(obj, args.concat(bindArgs))
    }
}

let value = 2;
let foo = {
    value: 1
};
function bar(name, age) {
    let result = {
		value: this.value,
		name: name,
		age: age
    }
    console.log(result)
};

bar.call(foo, "Jack", 20); // 直接执行了函数
// {value: 1, name: "Jack", age: 20}

let bindFoo1 = bar.bind(foo, "Jack", 20); // 返回一个函数
bindFoo1();
// {value: 1, name: "Jack", age: 20}

let bindFoo2 = bar.bind(foo, "Jack"); // 返回一个函数
bindFoo2(20);
// {value: 1, name: "Jack", age: 20}
