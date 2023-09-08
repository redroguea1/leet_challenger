/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
  let nextNode = head.next;

  while(nextNode){
    let temp = nextNode.next;
    nextNode.next = current;
    nextNode = current.next;
    current = temp;
    temp.next = nextNode;
  }

  head = current;

  return head;
//     //version2 works but cannot resolve it. 
//     let prev = null;
//     let current = head;
    
//     while (current){
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode;
//     }
//     return prev
    
//     //version 1 
//     //edge case of an empty list
//     let reverse = new ListNode();
//     let temp = head.val;
//     console.log(reverse);
//     while(temp!= null){
//         temp.next = reverse;
//         reverse.next = temp;
//         //console.log("popping from main list to reverse" + reverse);
//         temp = head.next;
//     }
    
//     return reverse;
 };