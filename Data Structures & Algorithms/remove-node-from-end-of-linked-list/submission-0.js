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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(-1);
        dummy.next = head;
        let l = dummy;
        let r = dummy.next;

        while (n) {
            r = r.next;
            n--;
        }

        while (r) {
            l = l.next;
            r = r.next;
        }

        l.next = l.next.next;

        return dummy.next;
    }
}
