/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //one off case
   if (strs.length <= 1) return [strs]
    
    let output = new Map(); //0, 1, 2
    
    for (const s of strs){
        let count = new Array(26).fill(0) //create an array filled with zeroes
        
        for(let char of s){
            //error something about using for..in loop was causeing
            //this to error and not generate the correct value.  
            
            /* the below line of code gets me to 0 
            LOGIC:
            console.log("b".charCodeAt()-"a".charCodeAt()) PRINTS 1 
            */
            
            count[char.charCodeAt()-'a'.charCodeAt()] += 1
        }
        if(!output.has(count)){
            output.set(count,[]);
        }
        output.get(count).push(s)
        
    }
    console.log(output)
    return output.values();
    
    
    //console.log(count)
    
    /* VERSION 1 mand Version 1.5
    let prev = strs[0]
    for(let str of strs){
       while(prev){
        //compare map of prev and current string 
        
           compareMaps(prev, str)
           //insert into my output
        
           prev = str
       }
    }
    
   // ["e" "a" "t"] = 0
   //["b" "a" "t"] = 1
   //tan = 2
    
    //how can I use a sorted string with my map/dictionary
    
    
    let map = new Map();
    for(let str of strs){
        //add it to the output array before hand,
        
        for (let char of str){
            if(!map.get(char)){
                map.set(char, 1)
            }
            else{
                let count = map.get(char);
                map.set(char, count+1)
            }
            console.log(map)
        }
    } */
};