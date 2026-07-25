class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let len = s.length
        let f = 0, b = len-1;
        for(let i=0; i< len/2; i++){
            let temp = s[f]
            s[f] = s[b]
            s[b] = temp

            f++;
            b--;

        }
        return s
    }
}
