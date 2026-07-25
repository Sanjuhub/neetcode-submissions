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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        function preorder(root) {
            if (!root) {
                return 0;
            }

            const left = preorder(root.left);
            const right = preorder(root.right);

            res = Math.max(res, left + right);

            return 1 + Math.max(left, right);
        }

        preorder(root);
        return res;
    }
}
