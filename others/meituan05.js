function test(arr, m){
    let dp = []
    
    for(let i = 0; i < arr.length - m + 1; i++){
        let initArr = arr.slice(i, m+i).sort()
        console.log(initArr)
        initArr = initArr.slice(1,m-1)
        //console.log(initArr)  
        dp[i] = getAverage(initArr)
    }
    //console.log(dp)
    return dp.indexOf(Math.max(...dp))+1

    function getAverage(arr){
        let sum = 0;
        arr.forEach(val=>{
            sum += val
        })
        return sum / arr.length
    }
}

let input = [3,2,3,1, 1]
console.log(test(input, 3))