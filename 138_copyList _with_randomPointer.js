/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {




    /*Version 1 looking at a brute force solution to recopy the list and 
    then bruteforcing to reassign each of the random values from the original list*/

    //make a copy from head
    let copy = new Node();
    let copyOfHead = copy; 
    //variable to traverse original list. 
    let pointerOriginal = head
    
    //copy list without random DONE
    while(pointerOriginal){
        copy.val = pointerOriginal.val
        copy.next = new Node()
        copy.random = null;
        // console.log("loop update")
        // console.log(copyOfHead)
        //moving through node list
        copy = copy.next;
        pointerOriginal = pointerOriginal.next;
    }
    
    //finding the random connections
    //HOW do i point to the random node from list1 and copy into my new list 
    pointerOriginal = head
    copy = copyOfHead
    while(){
          //O(n) is traveersaal for the list 
          //align my pointer 
          
          }
    

    
};