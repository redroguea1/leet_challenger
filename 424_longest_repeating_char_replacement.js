// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//version 1
var characterReplacement1 = function(s, k) {
    if (k == 0) return s.length
    let output = [] //[2]
    let l = 0 //
    let r = 1 // 3
    //change conditional 
    while (output.length <= k) {
        //able to make k number of adjustment
        if (l == r) r++
        if (s[l] == s[r])
            r++
        else if (s[l] == s[r + 1])
            output.push(r)
        r++
        //else l++
    }

//has output = k
//use my output array to find the where the character

return output
};

//version 2 

var characterReplacement = function(s, k){
    
}