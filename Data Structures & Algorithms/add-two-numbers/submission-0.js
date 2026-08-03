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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;

        let dummy = new ListNode(-1);
        let temp = dummy;
        while (l1 || l2) {
            let sum = 0;
            sum += carry;
            sum += l1 ? l1.val : 0;
            sum += l2 ? l2.val : 0;

            if (l1) {
                l1 = l1.next;
            }

            if (l2) {
                l2 = l2.next;
            }

            let node = new ListNode(sum % 10);
            temp.next = node;
            temp = temp.next;
            carry = Math.floor(sum / 10);
        }

        if (carry) {
            temp.next = new ListNode(carry);
        }
        return dummy.next;
    }
}
