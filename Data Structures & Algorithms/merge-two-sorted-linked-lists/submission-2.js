/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0); //  ListNode is an class making it an object 
        let current = dummy
    while(list1 && list2){
        if(list1.val < list2.val){
            dummy.next = list1; // your reversing the pointers so list1 starts at null for a new list
            list1 = list1.next; // list 1 equal list1.next skips over to the next point
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next; // in the new list after running the conditional you want to skip to next point 
    }
        dummy.next = list1 || list2; // attach the remaining list either list1 or list2

        return current.next
    }
}
