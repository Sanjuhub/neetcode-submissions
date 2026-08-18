class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let mid = 0;
        let minx = 1000;

        while (l <= r) {
            if (nums[l] < nums[r]) {
                minx = Math.min(minx, nums[l]);
            }
            mid = Math.floor((l + r) / 2);

            minx = Math.min(minx, nums[mid]);

            if (nums[l] <= nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return minx;
    }
}
