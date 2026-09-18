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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const node = new TreeNode(val);

        function dfs(root) {
            if (!root) {
                root = node;
                return;
            }

            if (root.val < val) {
                if (root.right) {
                    dfs(root.right);
                } else {
                    root.right = node;
                    return;
                }
            } else {
                if (root.left) {
                    dfs(root.left);
                } else {
                    root.left = node;
                    return;
                }
            }
            return;
        }

        if (root) {
            dfs(root);
            return root;
        } else {
            return node;
        }
    }
}
