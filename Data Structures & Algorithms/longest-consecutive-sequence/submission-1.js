class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let seqCount = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let len = 0;

                while (set.has(num + len)) {
                    len++;
                }

                seqCount = Math.max(seqCount, len);
            }
        }

        return seqCount;
    }
}
