/**
 * @param {string} s
 * @return {string[]}
 Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
 Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
 */
var findRepeatedDnaSequences = function(s) {
    //string of 10 character and need to see if there is a duplicate string
      //grab 10 character cut the string a 2nd time and see if there is the same set of characters.
      //slide window until we find additional strings, then return the output
      
      let output = []
      let l = 0
      let r = 9
      sArray= s.slice("")
      
      while(r<= s.length-1){ //update conditions 
          let temp = ""
          for(let i = 1; i <=r; i++ ){
              temp = [sArray[0], sArray[i]].join("")
          }
          output.push(temp)
          console.log(temp)
          l++
          r++
          break
      }
      return output
  };