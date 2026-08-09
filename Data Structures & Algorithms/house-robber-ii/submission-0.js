class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let len = nums.length;

        function robfun(n, arr) {
            if (n == 0) return arr[0];
            if (n < 0) return 0;
            if (dp[n] != -1) return dp[n];

            let pick = arr[n] + robfun(n - 2, arr);
            let notPick = 0 + robfun(n - 1, arr);

            dp[n] = Math.max(pick, notPick);
            return Math.max(pick, notPick);
        }

        if (len == 1) {
            return nums[0];
        }

        let temp1 = [],
            temp2 = [];
        for (let i = 0; i < len; i++) {
            if (i != 0) {
                temp1.push(nums[i]);
            }
            if (i != len - 1) {
                temp2.push(nums[i]);
            }
        }

        let dp = new Array(temp1.length + 1).fill(-1);
        let t1 = robfun(temp1.length - 1, temp1);

        dp = new Array(temp2.length + 1).fill(-1);
        let t2 = robfun(temp2.length - 1, temp2);
        return Math.max(t1, t2);
    }
}
