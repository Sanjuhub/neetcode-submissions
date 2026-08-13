class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let ar = new Set();
        let l = 0,
            res = 0;

        for (let i = 0; i < s.length; i++) {
            while (ar.has(s[i])) {
                ar.delete(s[l]);
                l++;
            }
            ar.add(s[i]);
            res = Math.max(res, i - l + 1);
        }

        return res;
    }
}
