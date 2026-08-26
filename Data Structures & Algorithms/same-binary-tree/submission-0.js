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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        let ans = true;

        dfs(p, q);
        function dfs(p, q) {
            if (!p || !q) {
                ans = false;
                // console.log('->', p, q)
                return;
            }

            if (p.left || q.left) dfs(p.left, q.left);
            if (p.right || q.right) dfs(p.right, q.right);

            // console.log(p.val, q.val)
            if (p.val !== q.val) {
                // console.log('->')
                ans = false;
            }
        }

        return ans;
    }
}
