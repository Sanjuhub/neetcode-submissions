class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let x = 0;
        for (let i = 0; i < nums.length; i++) {
            x ^= nums[i];
        }

        return x;
    }
}
