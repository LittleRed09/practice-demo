/**
 * 单例模式
 * @param {构造函数}} fn 
 * @returns 
 */
function getSingleTon(fn) {
    let obj;
    
    return function(){
        return obj || (obj = fn.apply(this, arguments))
    }
}