/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //convert to lower case
    //remove non alphanumerica characters
    
    let p1 = 0
    let p2 = s.length-1
    
    //convert to lowercase
    s = s.toLowerCase()
    
    //removing alphanumeric characters
    //need to use reg experession
    const re = /[^A-Za-z0–9_]/g;
    s.replace(re, "")
    console.log("string is: " + s)
    
    //checking if its a palindrome brute force
    while(p1<=p2){
        if(p1==p2) return true
        if(s[p1] == s[p2]){ //both characters are the same 
            p1++
            p2--
        }
        else return false
    }
};