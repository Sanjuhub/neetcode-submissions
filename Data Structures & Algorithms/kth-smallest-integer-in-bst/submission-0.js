/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let len = [];

        function valid(root) {
            if (!root) {
                return;
            }

            valid(root.left);
            len.push(root.val);
            valid(root.right);
        }
        valid(root);
        return len[k - 1];
    }
}
