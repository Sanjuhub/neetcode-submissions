class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSum = new Map();

        let res = 0,
            curSum = 0;

        prefixSum.set(0, 1);

        for (let n of nums) {
            curSum += n;
            let diff = curSum - k;

            res += prefixSum.get(diff) || 0;

            prefixSum.set(curSum, (prefixSum.get(curSum) || 0) + 1);
        }

        return res;
    }
}
