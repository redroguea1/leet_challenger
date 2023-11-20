var productExceptSelf = function(nums) {
    //version 1 
    //if we have i we need all of nums except nums[i]
    //insert product into output array
    //needs to run in 0(n)
    
    //if i sue a mapi potentially add to it very quickly
    //product function that takes values and adds them together
    
    let output = [];
    let stax = [];
    
    for (let num of nums){
        //slice I want to use to identify subsections of the array
        let idx = nums.indexOf(num)
        let shallow;
        if(idx == 0){ //start
            shallow = nums.slice(idx+1, nums.length);
            productMaker(shallow)
        } else if (idx ==nums.length-1){ //end
            shallow = nums.slice(0, idx-1 );
        } else { //middle 
            let left = nums.slice(0,idx);
            let right = nums.slice(idx+1, nums.length-1);
            shallow = left+right // HERE!! CHANGE to merge arrays. 
        }
        //insert back into output array at idx
        
        output.shift(productMaker(shallow))
    }
    
    function productMaker(arr){
        //(a*b)
        let prod = 1
        for(let num of arr){
            prod = num*prod
        }
        return prod
    }
};