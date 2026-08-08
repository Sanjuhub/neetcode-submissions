class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let len = nums.length;
        let dp = new Array(len + 1).fill(-1);
        function robfun(n) {
            if (n == 0) return nums[0];
            if (n < 0) return 0;
            if (dp[n] != -1) return dp[n];

            let pick = nums[n] + robfun(n - 2);
            let notPick = 0 + robfun(n - 1);

            dp[n] = Math.max(pick, notPick);
            return Math.max(pick, notPick);
        }

        return robfun(len - 1);
    }
}
