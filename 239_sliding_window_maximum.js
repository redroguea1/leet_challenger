/**
 * @param {number[]} nums
 * @param {number} k
 * 
 * example
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]`
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let l = 0 // 
    let r = k-1 // 3-1 = 2
    let output = []
    
    //version 1: failed on 37/51 test cases. 
    while(r<=nums.length){
        let baby = nums.slice(l,r+1)
        //console.log("baby array in the corner: " + baby)
        let max_num = baby.reduce((a,b) => Math.max(a,b))
        //console.log("max_num: " + max_num)
        output.push(max_num)
        l++
        r++
    }
    return output
};