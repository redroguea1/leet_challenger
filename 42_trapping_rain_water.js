//height = [0,1,0,2,1,0,1,3,2,1,2,1], output 6
//height = [4,2,0,3,2,5], output 9

var trap = function(height) {
    let l = 0 //LEFT
    let r = height.length-1 // RIGHT
    let output = 0 
    //HOW DO I declare more variables at once
    let maxL = height[l]
    let maxR = height[r]
     
    while(l<r){
        if(maxL < maxR){
            l++
            maxL = Math.max(maxL, height[l])
        }
        else{
            r--
            maxR = Math.max(maxR, height[r])
        }
        let x = i+1
        //MIGHT change this input into a while loop of some sort. 
        if(height[x]< height[i]){
            //indicates a divote
            output++
            x++
        }
        //checking for a negative value at the beginning
        //if height[x] >= height[i] && x-i > 0 
        //output = 
        

        //video Solution
        //need the min between the L R heights. which creates our boundary
        //min(L,R)-h[i] = always round up 
        //O(n) time + O(n) memory [possible to o(1) for memory]

        //using input of i 
        //create an array scanning each left and right array. 

        
        
    }
};