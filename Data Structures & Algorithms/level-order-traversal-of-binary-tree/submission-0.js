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
        let cur = root;
        let h = 0;
        let hmap = new Map();
        let res = this.dfs(cur, h, hmap);
        // console.log('->>', res)
        return res ? [...res.values()] : []
    }

    dfs(cur, h, hmap) {

        if(!cur)
        {
            return null
        }

        // console.log(cur.val, h)
        if(hmap.has(h)){
            hmap.set(h, [...hmap.get(h), cur.val])
        }
        else{
        hmap.set(h, [cur.val])

        }

        this.dfs(cur.left, h+1, hmap)
        this.dfs(cur.right, h+1, hmap)

        return hmap
    }
}
