function test(n){
    if(n === 1)return 2;
    if(n === 2)return 4;
    
    let queue = [3,2,3,2]
    let i = 3;
    while(i < n){
        let layer = []
        while(queue.length > 0){
            let value = queue.shift()
            if(value === 3){
                layer.push(3,2)
            } else {
                layer.push(3)
            }
        }
        queue = layer;
        i++;    
    }
    return add(queue)
 
    function add(arr){
        console.log(arr)
        let sum = 0;
        arr.forEach(val=>{
            sum += val
        })
        return sum
    }
}

//console.log('2',test(2))
//console.log('3',test(3))
console.log('4',test(4))
