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
     * @return {void}
     */
    reorderList(head) {
        let s = head;
        let f = head;
        while (f && f.next) {
            s = s.next;
            f = f.next.next;
        }

        let second = s.next;
        let prev = null;
        s.next = null;
        while (second) {
            let tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        second = prev
        let first = head

        while(second){
            let tmp1 = first.next
            let tmp2 = second.next

            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }
    }
}
