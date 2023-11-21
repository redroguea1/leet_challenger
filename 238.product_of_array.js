var productExceptSelf = function(nums) {
    //version 2: made things into functions but still wasn't getting the right output. 
      //if we have i we need all of nums except nums[i]
    //insert product into output array
    //needs to run in 0(n)
    
    //if i sue a mapi potentially add to it very quickly
    //product function that takes values and adds them together
    
    let output = [];

    
    for (let num of nums){
        //slice I want to use to identify subsections of the array
        // num = 0, 1, 2, ... n 
        let idx = nums.indexOf(num)
        let shallow = newArr(nums, num)
        //insert back into output array at idx
        let total = productMaker(shallow);
        console.log("total: " + total);
        output.shift(total)
    }
    return output; 
    
    function newArr(arr, idx){
        //remove the value and return a new array to be used. 
        let shallow;
        if(idx == 0){ //start
            shallow = arr.slice(1, arr.length);
            productMaker(shallow)
        } else if (idx ==arr.length-1){ //end
            shallow = arr.slice(0, idx);
        } else { //middle 
            let left = arr.slice(0,idx);
            let right = arr.slice(idx+1, arr.length-1);
            shallow = left.concat(right) 
            //shallow = nums.slice(0,idx).concast(nums.slice(idx+1, nums.length-1))
            // use the concat function to combine two arrays
        }
        return shallow
    }
    function productMaker(arr){ //computes
        //(a*b)
        let prod = 1
        for(let num of arr){
            prod = num*prod
        }
        return prod
    }

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