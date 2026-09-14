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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head);

        let leftprev = dummy;
        let cur = head;

        for (let i = 1; i < left; i++) {
            leftprev = leftprev.next;
        }
        cur = leftprev.next;

        let prev = null;
        for (let i = 0; i < right - left + 1; i++) {
            let tempNext = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tempNext;
        }

        leftprev.next.next = cur;
        leftprev.next = prev;

        return dummy.next;
    }
}
