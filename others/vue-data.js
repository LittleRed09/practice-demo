function Component(option){
    this.data = option.data
}

option = {
    data: {
        a: '1'
    }
}

let a = new Component(option)
let b = new Component(option)

b.data.a = '2'
console.log(a.data) // {a: '2'}