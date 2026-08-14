class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let hash = new Map();
        for (let i = 0; i < s1.length; i++) {
            hash.set(s1[i], (hash.get(s1[i]) || 0) + 1);
        }

        let l = 0;
        let ress = false;
        let hashCp = new Map();
        for (let r = 0; r < s2.length; r++) {
            let winLen = r - l + 1;
            hashCp.set(s2[r], (hashCp.get(s2[r]) || 0) + 1);
            console.log("->", hashCp, winLen, s1.length);
            if (winLen > s1.length) {
                console.log("<<<");
                if (hashCp.get(s2[l]) == 1) {
                    hashCp.delete(s2[l]);
                } else {
                    hashCp.set(s2[l], (hashCp.get(s2[l]) || 0) - 1);
                }
                l++;
            }

            winLen = r - l + 1

            if (winLen == s1.length) {
                console.log("->>", match(hash, hashCp));
                if (match(hash, hashCp)) {
                    return true;
                }
            }
        }

        function match(h1, h2) {
            for (let [key, value] of h1) {
                if (h2.get(key) !== value) {
                    return false;
                }
            }
            return true;
        }

        return false;
    }
}
