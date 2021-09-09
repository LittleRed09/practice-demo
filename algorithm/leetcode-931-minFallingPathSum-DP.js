/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    // 初始化
    let dp = [matrix[0]]
    let n = matrix.length;
    for(let i = 1; i < n; i++){
        dp.push([])
    }

    for(let i = 1; i < n; i++){
        for(let j = 0; j < n; j++){
            const prePath = [dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]].filter(val => !!val)
            console.log(prePath)
            dp[i][j] = matrix[i][j] + Math.min(...prePath)
        }
    }
    console.log(dp)
    return Math.min(...dp[n-1])
};

console.log(minFallingPathSum(
    [[2,1,3],[6,5,4],[7,8,9]]))