/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

 /*version 1 broken up into multiple steps when it somes to adding the values and printing them out. */
    let num1 = "";
    let num2 = "";
    let output = new ListNode();
    
    //sets up strings
    let p1 = l1;
    let p2 = l2;
    while(p1 || p2){ //o(n)
        //need conditionals for values when 
        num1 = p1.val + num1;
        num2 = p2.val + num2;
        p1 = p1.next;
        p2 = p2.next;
    }
    
    //reverse string
    
    
    //add values together and create new string
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    let numFinal = num1+num2
    numFinal = "" + numFinal
    
    //create new linked list from combined strings
    let i = numFinal.length -1
    let fill = output
    while(i>=0){
        fill.val = numFinal[i];
        if (i!=0) {fill.next = new ListNode();}
        fill = fill.next        
        i--
    }
    
    return output
    
};