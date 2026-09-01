class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (res.has(nums[i])) {
                res.set(nums[i], res.get(nums[i]) + 1);
            } else {
                res.set(nums[i], 1);
            }
        }

        let mx = -Infinity,
            idx = -1;
        let keys = [...res.keys()];
        for (let i = 0; i < keys.length; i++) {
            let val = res.get(keys[i]);
            if (mx < val) {
                mx = val;
                idx = keys[i];
            }
        }

        return idx;
    }
}
