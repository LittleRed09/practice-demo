/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    let mem = []
    let result = dp(text1, 0, text2, 0)
    console.log(mem)
    return result;
    
    function dp(str1, i, str2, j) {
        if(i >= str1.length || j >= str2.length){
            return 0;
        }
        if(mem[i]?.[j]) {
            return mem[i][j]
        }
        if(!mem[i]){
            mem[i] = []
        }
        if(str1[i] === str2[j]){
            mem[i][j] = 1 + dp(str1, i + 1, str2, j + 1)
            return mem[i][j]
        }
        mem[i][j] = Math.max(dp(str1, i + 1, str2, j + 1), dp(str1, i, str2, j + 1), dp(str1, i + 1, str2, j))
        return mem[i][j]
    }
};
console.log(longestCommonSubsequence('abc', "def"))