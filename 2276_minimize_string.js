/**
 * @param {string} s
 * @return {number}
 * https://app.skiff.com/docs/fae543fa-ae03-412b-96ae-b0736365e57d#QP9544jiKNpkmgCIsikiPS2mDoGRdy+QQiiphoSjKqs=
 * 
 */
var minimizedStringLength = function(s) {
    //return the length of the 
    //iterate through the string
    //for each character i check 
        //remove that letter and see if there are any other occurences of the letter
        //if yes then 
        //move the pointer to before and after it
        //remove the character again
        //repeat the operation. 
    
        let answer = 0;
        for(let i = 0; i<s.length; i++){
            let count = 0
            let c = s.matchAll(s[i]);
            console.log("index i is currently: " + i)
            for (const item of c){
                console.log("count = "+ count)
                console.log("item = "+ item)
                count++
            }
        }
        
        return answer
};