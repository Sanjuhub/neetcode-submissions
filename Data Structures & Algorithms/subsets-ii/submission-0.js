class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();

        let res = [];

        function backtrack(start, cur) {
            if (start == nums.length) {
                res.push([...cur]);
                return;
            }

            cur.push(nums[start]);
            backtrack(start + 1, [...cur]);
            cur.pop();
            while (start + 1 < nums.length && nums[start] === nums[start + 1]) {
                start++;
            }
            backtrack(start + 1, [...cur]);
        }

        backtrack(0, []);
        return res;
    }
}
