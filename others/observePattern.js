/**
 * 观察者模式实现
 */

class Observer {
    constructor(){
        this.update = ()=>{
            console.log('updating...')
        }
    }
}

class Subject {
    constructor(){
        this.subList = []
    }

    notify() {
        this.subList.forEach((sub)=>{
            sub.update();
        })
    }

    add(sub) {
        if(!this.subList.includes(sub)){
            this.subList.push(sub)
        }
    }

    remove(sub) {
        let index = this.subList.indexOf(sub)
        if(index !== -1) {
            this.subList.splice(index, 1)
        }
    }
}

let weatherStation = new Subject();
let jhon = new Observer();
let jack = new Observer();
weatherStation.add(jhon)
weatherStation.add(jack)
weatherStation.notify();