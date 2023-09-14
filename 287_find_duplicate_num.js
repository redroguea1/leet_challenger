/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
        /* version 2 requires Floyd's algorithm where you use two pointers to reference the various indices since each value in the array is pointing back to the array slot. Drawing this out ois the easiest way tot see this visually 
        but otherwise you will have 3 pointers slow, slow2, fast. after aligning slow and fast you use slow2 to identify the final value in a 2nd while loop  */

        /* version 1 use a set to identify the non duplicate numbers not sure if this meets the constant extra space requirement but does not meet the constant extra space requirement*/
        let set = new Set();
    
        for (num of nums){
            if(!set.has(num)){set.add(num);}
            else return num
        }
        
    
};