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
    /* version 2 think about using a slow and fast pointer in order to create a loop, while condition will be fast and fast.next */
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow==fast) {
            return true
        }
    }
    return false



    /*Version 1 leveraging the pointer and creating a set to identify if a value has been hit before */
    //using a set check to see if that value has been hit before 
    //OR if pointer is head then return true else
    
 //using a set check to see if that value has been hit before 
    //OR if pointer is head then return true else
    let pointer;
    if (head && head.next) pointer = head.next
    else return false
    
    let set = new Set();
    let loop = 0;
    while(pointer!=null){
        //off case when we run back into our head pointer return true
        console.log("loop is: " + loop);
        loop++;
        //if(pointer == head) return true;
        
        //add to our set and then create
        
        if(!set.has(pointer.val)) {
            set.add(pointer.val);
        }
        else {return true}
        pointer = pointer.next;
    }
     return false 
    
};