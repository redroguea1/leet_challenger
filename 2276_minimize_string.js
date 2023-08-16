/**
 * @param {string} s
 * @return {number}
 * https://app.skiff.com/docs/fae543fa-ae03-412b-96ae-b0736365e57d#QP9544jiKNpkmgCIsikiPS2mDoGRdy+QQiiphoSjKqs=
 * 
 */
var minimizedStringLength = function (s) {
   

    //version 3
    //create an empty string called answer
    //create a set to store the unique values of s
    //for character s[i] in string "s"
    //if char is not in set
    //add character
    //else increment i
    //Combine set elements into a string save to answer
    //return answer.length 
    let answer = "";
    let combo = new Set()
    for (let i= 0; i<s.length; i++){
        if(!combo.has(s[i])){
            combo.add(s[i])
        }
    }
    combo.forEach(c => answer+= c)
    return answer.length


    //version 2 but doesn't work since  the way this iterable gets built. 
    let lenny = c.count()
    if (lenny == 1) {
        console.log("count is 1")
        console.log(s)
        continue
    }
    else {
        for (const item of c) {
            //take item and remove that character from 
            console.log("COUNT is not 1")
            s = s.replace(item, '')
            console.log("new s: " + s)
            //console.log("count = "+ count)
            console.log("item = " + item)
        }
    }

    //version 1
     //return the length of the 
    //iterate through the string
    //for each character i check 
    //remove that letter and see if there are any other occurences of the letter
    //if yes then 
    //move the pointer to before and after it
    //remove the character again
    //repeat the operation. 
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        let count = 0
        let c = s.matchAll(s[i]);
        console.log("index i is currently: " + i)
        for (const item of c) {
            console.log("count = " + count)
            console.log("item = " + item)
            count++
        }
    }

    return answer
};