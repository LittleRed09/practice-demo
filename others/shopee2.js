function getMaxSubstrLenProd(inputStr) {
    let result= 0
    let dp = []
    for(let i=0; i < inputStr.length; i++){
        dp.push([])
    }
    for(let i = 0; i < inputStr.length; i++){
        dp[i][i] = 2 ** (inputStr[i].charCodeAt() - 97)
        for(let j=i+1;j<inputStr.length; j++){
            dp[i][j] = dp[j][i] = dp[i][j-1] | 2 ** (inputStr[j].charCodeAt() - 97)
        }
    }
    console.log(dp)
    for(let l1=0;l1<inputStr.length;l1++){
        for(let l2=0;l2<inputStr.length;l2++){
            let l3=l4=inputStr.length-1;
            while(l2 < l3){
                console.log(dp[l1][l2]&dp[l3][l4])
                if(!(dp[l1][l2] & dp[l3][l4])){
                    console.log('hhh')
                    result = Math.max((l2-l1+1)*(l4-l3+1), result)
                    l3--;
                } else {
                    l3=l4=l3-1;
                }
            }
        }
    }
    return result;
}

let input = "adcbadcbedbadedcbacbcadbc"
console.log(getMaxSubstrLenProd(input))