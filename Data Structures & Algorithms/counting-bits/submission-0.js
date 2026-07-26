class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let ans = [];
        for (let i = 0; i <= n; i++) {
            ans.push(countBit(i));
        }

        function countBit(n) {
            let cnt = 0;
            while (n != 0) {
                n = n & (n - 1);
                cnt++;
            }
            return cnt;
        }
        return ans;
    }
}
