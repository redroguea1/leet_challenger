// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1

//first attempt
var checkInclusion = function(s1, s2) {
    let output = false
    let l = 0
    let r = 0
    
    let perm = []
    
    while(perm < s1.length){
        //2*1 = 2
        //strings length & present of all character in that new string
        let f1 = s1.split()
        f1 = f1.sort((a,b) => b-a)
        //for loop to solve the rest of the problem
        perm.push(f1)
    }

    //got stuck in needing ot compare the strings lengths and checking them. 
    
};