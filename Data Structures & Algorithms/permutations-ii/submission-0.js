class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let freq = new Map();
        let perm = [];
        let res = [];

        for (let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        }

        function permute() {
            if (perm.length == nums.length) {
                res.push([...perm]);
                return;
            }

            for (let [key, val] of freq) {
                console.log("->", key, val);

                if (val > 0) {
                    perm.push(key);
                    freq.set(key, freq.get(key) - 1);
                    permute();
                    freq.set(key, freq.get(key) + 1);
                    perm.pop();
                }
            }
        }

        permute();

        return res;
    }
}
