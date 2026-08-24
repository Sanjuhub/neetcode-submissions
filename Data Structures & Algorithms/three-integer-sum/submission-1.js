class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        console.log("->", nums);
        let res = [];

        for (let i = 0; i < nums.length; i++) {
            let a = nums[i];

            if (i > 0 && a == nums[i - 1]) {
                continue;
            }
            let l = i + 1;
            let r = nums.length - 1;
            console.log("->>>>", res);
            while (l < r) {
                if (a + nums[l] + nums[r] == 0) {
                    res.push([a, nums[l], nums[r]]);
                    l++;

                    while (nums[l] == nums[l - 1] && l < r) {
                        l++;
                    }
                    // break;
                }

                if (a + nums[l] + nums[r] > 0) {
                    r--;
                    // while (nums[r] == a) {
                    //     r--;
                    // }
                }

                if (a + nums[l] + nums[r] < 0) {
                    l++;
                }
                // break;
            }
        }
        console.log("->", res);

        return res;
    }
}
