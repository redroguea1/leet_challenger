/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    
    //version1 
    //idea would be to use a similar approach to merging 2 linked list but in this case base it around an index, i, where we are merging lists[i] and list[i+1] until we have merged k lists...?
    if (lists == []) return lists
    let dummy = new ListNode();
    let tail = dummy;
    let counter = 0
    
    for(let i= 0; i<lists.length; i++){
        //console.log(lists[i]);
        while(lists[i] && lists[i+1]){
            if(lists[i].val< lists[i+1]){
                tail.next = lists[i];
                lists[i] = lists[i].next;
            }
            else {
                tail.next = lists[i+1];
                lists[i+1] = lists[i+1].next;
            }
            tail = tail.next;
            console.log(counter + ":" );
            console.log(lists[i].next);
            counter++
        }
        if (lists[i]) tail.next = lists[i]
        else if(lists[i+1]) tail.next = lists[i+1]
        counter = 0;
    }
    return dummy.next;
    
};