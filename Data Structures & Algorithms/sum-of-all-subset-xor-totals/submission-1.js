class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        //----- O(n)
        let res = 0
        for(let i of nums){
            res = res | i
        }

        return res * 2 ** (nums.length - 1)



        // ----- O(2**n)
        // function dfs(i, total) {
        //     if (i == nums.length) {
        //         return total;
        //     }

        //     return dfs(i + 1, total ^ nums[i]) + dfs(i + 1, total);
        // }

        // return dfs(0, 0);
    }
}
