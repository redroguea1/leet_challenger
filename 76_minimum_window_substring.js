/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */
var minWindow = function(s, t) {
    let answer = ''
    let l = 0
    let r = 1
    
    let sArray = s.split('') //convert to arrays
    let tArray = t.split('')
    
    while(l<r){ //might add a different conditional
        let ex1 = sArray.indexOf(t[l])
        console.log("here is the index of t1 in sArray:" + ex1)
        let ex2 = sArray.indexOf(t[r])
        if(ex1 != (ex2-1) || ex1 != (ex2+1)){
           //move l to the later occurence of the value 
            sArray = sArray.slice(ex1+1) 
            console.log(sArray)
            l = sArray.indexOf(t[l])
            //add to answer
         }
        else{
            //
        }
        break
    }
    return answer
};