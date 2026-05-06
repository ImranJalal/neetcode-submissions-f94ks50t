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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
    let node = null; // starts at nothing

    while(head){ // while head is true and not null or undefined loop continues
        const temp = head.next; // head starts at value 1 but with head.next it starts at value 1
        head.next = node; // pointer is reversed
        node = head // move node forward 
        head = temp; // move head forward
    }

    return node 
    }
}
