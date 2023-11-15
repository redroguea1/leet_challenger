/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //what are the constraints of nums and target? 

    //version 1 figuring out binary search but needed to be o (log n)
    let left = 0;
    let right = nums.length-1 //placing it at the end of the array
    
    while(left <= right){
        let mid = left + Math.floor((right - left)/2); // index value: 3, 4 
        //use my mid to then iterate through the array. 
        //target = 9
        //nums = [-1,0,3,5,9,12]
        if(target === nums[mid]) {
            return mid;
        }
        else if (target > nums[mid]) {
            left = mid + 1; //values: 0, 4
        }
        else if (target < nums[mid]){
            right = mid - 1; // values: 6
        }
    }
    return -1
};