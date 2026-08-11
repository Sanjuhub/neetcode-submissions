class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let out = "";
        for (let i = 0; i < strs.length; i++) {
            out += strs[i].length + "#" + strs[i];
        }
        return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let i = 0,
            j = 0;
        while (i < str.length) {
            j = i;
            while (str[j] != "#") {
                j += 1;
            }

            let ln = parseInt(str.slice(i, j));

            arr.push(str.slice(j + 1, j + 1 + ln));
            i = j + 1 + ln;
        }
        return arr;
    }
}
