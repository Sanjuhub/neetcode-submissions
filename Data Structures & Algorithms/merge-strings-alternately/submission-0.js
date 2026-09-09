class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let w1 = 0,
            w2 = 0;
        let res = "";
        let w1Len = word1.length;
        let w2Len = word2.length;
        while (w1 < w1Len && w2 < w2Len) {
            res += word1[w1] + word2[w2];
            w1++;
            w2++;
        }

        return res + word1.slice(w1, word1.length) + word2.slice(w2, word2.length);
    }
}
