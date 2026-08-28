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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        let q = [];

        q.push(root);
        while (q.length) {
            let qLen = q.length;
            // console.log("_>>", q[qLen - 1]);
            if (q[qLen - 1]) {
                res.push(q[qLen - 1].val);
            }
            for (let i = 0; i < qLen; i++) {
                let node = q.shift();

                if (node) {
                    node.left && q.push(node.left);
                    node.right && q.push(node.right);
                }
            }
        }
        return res;
    }
}
