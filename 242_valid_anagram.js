var isAnagram = (s, t, map = new Map()) => {
    const isEqual = s.length === t.length;
    if(!isEqual) return false;
    addFrequency(s, map);
    subtractFrequency(t, map);

    return checkFrequency(map);
};

const addFrequency = (str, map) => {
    for(const char of str){
        const count = (map.get(char) || 0) + 1;
        map.set(char, count);
    }
};

const subtractFrequency = (str, map) => {
    for(const char of str) {
        if(!map.has(char)) continue;
        const count = map.get(char)-1;
        map.set(char,count);
    }
};

const checkFrequency = (map) => {
    for (const [char, count] of map){
        const isEmpty = count === 0;
        if(!isEmpty) return false;
    }
    
    return true;
}



// version 1 
// var isAnagram = function(s, t) {
//     if(s.length != t.length) return false;
    
//     //need to use a hashmap
// let countS = new Map();
// let countT = new Map();

// for(let i=0; i< s.length; i++){
//     //with strings you can index their various characters using bracket notation
//     let sCounter = countS.get(s[i]); //if this is undefined then set it as 0
//     let tCounter = countT.get(t[i]);
    
//     //NEED to fix my adding of the function
//     if(sCounter) {
//         countS.set(s[i], 1+sCounter); 
//     } else{ //first count
//         countS.set(s[i], 1);
//     }
//     if(tCounter){ //increment 
//         countT.set(t[i], 1 + tCounter);
//     } else{ //first count
//         countT.set(t[i], 1)
//     }
//     /*this line of code is adding 1 to whatever value of that character is there. 
//     if no character is found then a 0 is taken as the default value */
// }
// /*HERE
// my maps are good, 
// my keys are returning an iterable. 
// Cant access them 
// */ 

// countS.forEach((v,k) => { // (callbackfn, value, key, args)
//     console.log("k is this: " + k)
//     console.log(countT.get(k));
//     let chance = countT.get(k);
//     //console.log(chance);
//     if(chance === undefined){
//         return false
//     }
// })
// return true;


// //should call our function for
// /*
// The below code doesn't work because i needed to access the method itself 
// countS.forEach((values, keys) => {
//     console.log("why?")
// }) */
// //return true;
