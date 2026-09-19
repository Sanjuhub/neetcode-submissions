class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];

        function backtrack(start, cur) {
            if (cur.length == k) {
                res.push([...cur]);
                return;
            }

            for (let i = start; i <= n; i++) {
                cur.push(i);
                backtrack(i + 1, cur);
                cur.pop();
            }
        }

        backtrack(1, []);
        return res;
    }
}
