class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (mp.has(nums[i])) {
                mp.set(nums[i], mp.get(nums[i]) + 1);
            } else {
                mp.set(nums[i], 1);
            }
        }

        const sortedByValue = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));

        return [...sortedByValue.keys()].slice(0, k);
    }
}
