class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        function dfs(i, arr) {
            if (i == nums.length) {
                res.push(arr);
                return null;
            }

            dfs(i + 1, [...arr, nums[i]]);
            dfs(i + 1, arr);
        }

        dfs(0, []);
        return res;
    }
}
