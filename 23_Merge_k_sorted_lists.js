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

    //version 3 using a simple pointer, iterate through each of the lists and merge them with our simple pointer. convering a simple pointer into a list and then merging to the list fromt here
    let primal = null;
    
    for(let i=0; i<lists.length; i++){
        primal = mergeLists(primal, lists[i])
    }
    
    return primal;

    //version 2 breaking up the problem 1) sorting through k list and 2) fuzing two list in a separate function. This way we can handle our various list with greater ease. 
    // if(!lists || lists.length ==0) return null;

    // while(lists.length > 1 ){
    //     let finalList = [];

    //     for(let i = 0; i<lists.length; i+2){
    //         let list1 = lists[i];
    //         let list2 = null;
    //         if(lists[i+1]){
    //             let list2 = lists[i+1]
    //         }
    //         finalList.push(mergeLists(list1, list2))
    //     }
    //     lists = finalList;
    // }
    // return lists[0]

    function mergeLists(list1, list2){
        let dummy = new ListNode();
        let tail = dummy;
        
        while(list1 && list2){
            if(list1.val<list2.val){
                tail.next = list1;
                list1 = list1.next;
            }
            else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next
        }
        if(list1) tail.next = list1;
        else if(list2)tail.next = list2;

        return dummy.next;
    }
    
    // //version1 
    // //idea would be to use a similar approach to merging 2 linked list but in this case base it around an index, i, where we are merging lists[i] and list[i+1] until we have merged k lists...?
    // if (lists == []) return lists
    // let dummy = new ListNode();
    // let tail = dummy;
    // let counter = 0
    
    // for(let i= 0; i<lists.length; i++){
    //     //console.log(lists[i]);
    //     while(lists[i] && lists[i+1]){
    //         if(lists[i].val< lists[i+1]){
    //             tail.next = lists[i];
    //             lists[i] = lists[i].next;
    //         }
    //         else {
    //             tail.next = lists[i+1];
    //             lists[i+1] = lists[i+1].next;
    //         }
    //         tail = tail.next;
    //         console.log(counter + ":" );
    //         console.log(lists[i].next);
    //         counter++
    //     }
    //     if (lists[i]) tail.next = lists[i]
    //     else if(lists[i+1]) tail.next = lists[i+1]
    //     counter = 0;
    // }
    // return dummy.next;
    
};