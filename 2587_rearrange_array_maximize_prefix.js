//Brilliant Black Minds
//SOLVED!


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    let prefix = []
    let sum = 0
    nums = nums.sort((a,b) => b-a);
    for (let i = 0; i< nums.length; i++){
        sum = nums[i]+sum
        prefix.push(sum)
        //nums[i]= sum //for identifying the prefix using the same array lower space complexity
    }
    //shifting elements in place versus creating an additional memory use
    prefix = prefix.filter(e => e > 0)
    return prefix.length
  
};
