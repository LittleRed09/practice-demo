/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)

    for(let i = 1; i < dp.length; i++){
        let pre = dp.slice(0, i).filter((val, index) => nums[i] > nums[index])
        if(pre.length === 0){
            continue
        }
        dp[i] = Math.max(...pre) + 1
    }
    return Math.max(...dp)
};
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))