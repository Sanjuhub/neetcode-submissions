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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        let q = [];

        q.push(root);
        while (q.length) {
            let lvl = [];
            let qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                let node = q.shift();

                if (node) {
                    lvl.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (lvl.length) res.push(lvl);
        }
        return res;
    }
}
