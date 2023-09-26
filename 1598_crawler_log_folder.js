/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    //if "./" - stay where you are = 0
      //if "../" - go up1 = -1
      //if x/ - go to that directory +1

      //version 1, brute force solution using a counter that increments and decrement before it is returned
      let moves = 0;
      let i = 0;

      while (i<logs.length){
        if (logs[i] == "./"); //nothing happens, useless line of code
        else if (logs[i] == "../" && moves != 0) moves--;
          //need a rule here for when we have a file folder. 
        else if(!logs[i].includes(".")) moves++
        i++
      }
      return moves
    
};