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
        let arr = [];
        let temp = head;
        while (temp) {
            arr.push(temp);
            temp = temp.next;
        }

        let dummy = new ListNode(-1);
        let t = dummy;
        while (arr.length) {
            t.next = arr.shift();
            t = t.next;

            if (arr.length) {
                t.next = arr.pop();
                t = t.next;
            }
        }
        t.next = null;
        return dummy.next;
    }
}
