let nums = [3,2,4]
let target = 6

var twoSum = function(nums, target) {
    let i = 0 
    let output = []
    while (i<nums.length){
        if(nums.includes(target-nums[i])){
            //let j equal the index of the diff
            let j = nums.indexOf(target-nums[i])
            //let diff = nums[j]
            if (nums[i]+nums[j] == target){
                output.push(i)
                output.push(j)
                return output
            }
        }
        else i++
    }
};

twoSum(nums, target);