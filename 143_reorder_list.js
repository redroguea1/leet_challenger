/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    //version 1 - no good was looking at the problem incorrectly and creating extra data and space despite speed
    
    let stax = [];
    let curr = head;
    //check how to create node list 
    
    while (curr){
        stax.push(curr.val);
        curr = curr.next;
    }
    console.log(stax)
    
    while(stax.length >0) {
        //shift and pop from the array until stax is 0 
        //grab element 1 and element n, then element 2, then element n-1...
        curr = stax.shift(); //shift doesn't require a value just returns a value
        curr.next = stax.pop(); //pop from the end 
        break
    }
    //new stax should be smaller given nupdated code. 
    //console.log(stax);     
};