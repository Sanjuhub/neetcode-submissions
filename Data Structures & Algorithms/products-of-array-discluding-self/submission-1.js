class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length - 1;
        let suf = [];
        let post = [];
        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            post[i] = i == 0 ? 1 * nums[i] : post[i - 1] * nums[i];
            suf[i] = i == 0 ? 1 * nums[len - i] : suf[i - 1] * nums[len - i];
            
            // console.log('->', i, suf)
        }
    suf.reverse()
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                ans[i] = 1 * suf[i+1]
                continue
            }
            if(i == len){
                ans[i] = 1 * post[i-1]
                continue
            }
            ans[i] = post[i-1] * suf[i+1];
        }

        console.log("->", post, suf, ans);
        return ans;
    }
}
