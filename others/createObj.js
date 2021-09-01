/**
 * 创建对象的一些方式
 */

/**
 * 工厂模式
 */
function createPerson(name){
    const obj = {}
    obj.name = name
    obj.getName = function(){
        console.log(this.name)
    }
    return obj
}

var person1 = createPerson('kevin')
person1.getName();

/**
 * 构造函数模式
 */
function Person(name){
    this.name = name;
    this.getName = function(){
        console.log(this.name)
    }
}

var person2 = new Person('jhon')
person2.getName()

/**
 * 原型模式
 */
function Dog(){

}

Dog.prototype.name = 'kevin'
Dog.prototype.getName = function(){
    console.log(this.name)
}

var dog = new Dog()
dog.getName()

/**
 * 组合模式——属性放在构造函数，方法放在原型
 */
function Cat(name){
    this.name = name;
}

Cat.prototype.getName = function(){
    console.log(this.name)
}

var cat = new Cat('jack')
cat.getName()