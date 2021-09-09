/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    const dp = [0]

    for(let i = 1; i <= amount; i++){
        let minList = coins.filter(val => i - val > -1 && dp[i - val] > -1).map(val => dp[i - val])
        dp[i] = minList.length > 0 ? Math.min(...minList) + 1 : -1
    }
    return dp[amount]
};

console.log(coinChange([2], 3))