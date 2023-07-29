
// numbers = [2,7,11,15], target = 9
// numbers = [2,3,4], target = 6
// numbers = [1,3,3,4], target = 6
// numbers = [0, 0, 1, 2] target = 0

//FAILURE 19/23 test cases passed. 

var twoSum = function(numbers, target) {
    const output = []
    let i = 0
    while(output.length<2){
        //start by findiing the difference between target and numbers[i]
        if (numbers.includes(target - numbers[i])){
            console.log("version 1 " + output)
            output.push(i+1);
            //i=1 is half of the target
            let i2 = numbers.indexOf(target-numbers[i]);
            console.log("checking the I")
            if(i == i2) { // 0s exception?? HERE Expand the conditions for this to make sure that 
                i2++;
                //TRY AN ARRAY
                //create a short array
                let short = numbers.slice(i2)
                //check for difference again
                if(short.includes(target-numbers[i])) {
                    //solve for location of 2nd answer
                    i2 = short.indexOf(target-numbers[i])
                    //check the differnce in length between short and numbers and add that to the index of
                    let remains = numbers.length-short.length
                    output.push(i2+1+remains)
                }
                // if(numbers[i]+numbers[i2] == target){
                //     console.log("version 3 new branch hit");
                //     output.push(i2+1);
                // }
            }
            else if(numbers[i]+numbers[i2] == target){
                output.push(i2+1);
                console.log("version 2 " + output);
            }
        }
        else i++;
        //if (i>=numbers.length && output.length<2) i=0
    }
    //grab the first element subtract it from the target and find the index of the remainder if it is there. 
    //one line for code above
    //if not there then move the index to the next number and compute the negtive of it. 
    //+1 to the index before adding it to our solutions array.
    return output
};

let numbers = [1,3,3,4];
let target = 6;
console.log(twoSum(numbers, target));