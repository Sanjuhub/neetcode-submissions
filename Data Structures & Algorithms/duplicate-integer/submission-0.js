class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = new Set(nums)

        if(arr.size != nums.length)
        return true
        return false
    }
}
