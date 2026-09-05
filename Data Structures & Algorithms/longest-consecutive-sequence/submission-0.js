class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let seqCount = 0;
        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let len = 0;
                while (set.has(nums[i] + len)) {
                    len++;
                }
                seqCount = Math.max(seqCount, len);
            }
        }
        return seqCount;
    }
}
