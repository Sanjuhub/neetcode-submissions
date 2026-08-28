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
    goodNodes(root) {
        let res = this.dfs(root, -Infinity);
        return res;
    }

    dfs(root, maxx) {
        if (!root) {
            return null;
        }

        let good = 0;

        if (maxx <= root.val) {
            good = 1;
            maxx = root.val;
        }

        good += this.dfs(root.left, maxx);
        good += this.dfs(root.right, maxx);
        return good;
    }
}
