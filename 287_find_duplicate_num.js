/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
        /* version 2 requires Floyd's algorithm where you use two pointers to reference the various indices since each value in the array is pointing back to the array slot. Drawing this out ois the easiest way tot see this visually 
        but otherwise you will have 3 pointers slow, slow2, fast. after aligning slow and fast you use slow2 to identify the final value in a 2nd while loop  */
        let slow, slow2, fast = 0; // declaration and assignment of multiple variables. 

        //confirming that there is a loop and moving both pointer to that loop 
        while(true){
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast) break;
        }

        //slow2 is moving through the loop at some point they will cross paths since slow will eventually loop back around to where slow2 is apporaching which is what we return the location of the duplicate. 
        while(true) {
            slow = nums[slow]
            slow2 = nums[slow2]
            if (slow == slow2) return slow
        }
        /* version 1 use a set to identify the non duplicate numbers not sure if this meets the constant extra space requirement but does not meet the constant extra space requirement*/
        let set = new Set();
    
        for (num of nums){
            if(!set.has(num)){set.add(num);}
            else return num
        }
        
    
};