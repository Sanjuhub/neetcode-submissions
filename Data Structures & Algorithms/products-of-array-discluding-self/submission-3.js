class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = new Array(nums.length).fill(1);

        let pf = 1;
        for (let i = 0; i < nums.length; i++) {
            ans[i] = pf;
            pf *= nums[i];
        }

        let sf = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            ans[i] *= sf;
            sf *= nums[i];
        }

        return ans;
    }
}
