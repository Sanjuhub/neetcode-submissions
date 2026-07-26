class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let cnt = 0;
        while (n > 1) {
            cnt += n & 1;
            n = n >> 1;
        }
        if (n == 1) cnt++;
        return cnt;
    }
}
