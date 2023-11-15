/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let rotations = 0;
    
    let left = 0; // becomes 2 || 3  
    let right = nums.length - 1; //5
    
    let min = Math.min(nums[left], nums[right-1])
    
    while (left < right){
        let mid = Math.floor((left + right)/2) //2, 3, 4
        if(nums[mid] > min) {
            left = mid;
            continue;
        }//
        else {
            min = Math.min(min, nums[mid], nums[left], nums[right])
            right--
        }
        left++; // 4
    }
    return min
};