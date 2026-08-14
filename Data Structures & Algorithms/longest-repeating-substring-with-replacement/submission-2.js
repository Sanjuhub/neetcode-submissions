class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let sMap = new Map();
        let l = 0,
            res = 0;

        for (let r = 0; r < s.length; r++) {
            sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);
            let mxLen = maxChar(sMap);
            let winLen = r - l + 1;

            if (winLen - mxLen <= k) {
                // console.log('->', winLen, mxLen, res)
                res = Math.max(res, winLen);
            } else {
                sMap.set(s[l], (sMap.get(s[l]) || 0) - 1);
                l++;
            }
            // console.log('_', mxLen)
        }

        function maxChar(ss) {
            let keys = ss.keys();
            let mx = 0;
            for (let i of keys) {
                mx = Math.max(mx, ss.get(i));
            }
            return mx;
        }
        return res
    }
}
