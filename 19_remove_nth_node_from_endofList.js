/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    let nxt = head.next;
    //return empty list if only a single node. 
    if (nxt == null) {
        head = head.next;
        return head
    }
    let count = 0;
    //count how many nodes in our list. 
    while (curr){ // O(n)
        count++
        curr = curr.next;
    }
    curr = head
    if (count== n){head = head.next}
    //traverse to node 
    while (count > n){
        if (count == n+1){
            //node removal 
            curr.next = nxt.next;
            nxt.next = null;
            count-- 
            break;
        }
        else {
            curr = curr.next;
            nxt = nxt.next;
            count--
        }
    }
    return head; 
    
};