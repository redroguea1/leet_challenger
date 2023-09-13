/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    /*Version 1 leveraging the pointer and creating a set to identify if a value has been hit before */
    //using a set check to see if that value has been hit before 
    //OR if pointer is head then return true else
    
    if(head == null) return false
    else if (head.next == null) return false 
    let pointer = head.next
    let set = new Set()
    
    while(pointer!=null){
        //off case when we run back into our head pointer return true
        if(pointer == head) return true;
        
        //add to our set and then create 
        if(!set.has(pointer.val)) {
            set.add(pointer.val);
        }
        else {return true}
        pointer = pointer.next;
    }
     return false 
    
};