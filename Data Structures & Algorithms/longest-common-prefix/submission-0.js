class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = strs[0];
        for (let i = 1; i < strs.length; i++) {
            let a = strs[i];
            for (let j = 0; j < res.length; j++) {
                if (res[j] != a[j]) {
                    res = res.slice(0, j);
                }
            }
        }
        return res
    }
}
