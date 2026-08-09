class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let s of strs) {
            let freq = new Array(26).fill(0);
            for (let i = 0; i < s.length; i++) {
                freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1 
            }

            const key = freq.join("#");
            
            if (map.has(key)) {
                map.set(key, [...map.get(key), s]);
            }
            else{
            map.set(key, [s]);

            }
        }
        return [...map.values()];
    }
}
