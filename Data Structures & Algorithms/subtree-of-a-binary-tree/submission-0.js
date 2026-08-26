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

function isSameTree(s, t) {
    if (!s && !t) {
        return true;
    }

    if (s && t && s.val == t.val) {
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }

    return false;
}

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function ifSubTree(root, subRoot) {
            if (!subRoot) return true;

            if (!root) return false;

            if (isSameTree(root, subRoot)) {
                return true;
            }

            return ifSubTree(root.left, subRoot) || ifSubTree(root.right, subRoot);
        }

        return ifSubTree(root, subRoot);
    }
}
