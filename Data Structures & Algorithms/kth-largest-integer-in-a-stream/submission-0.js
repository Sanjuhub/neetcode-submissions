class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = nums.sort((a, b) => a - b);
        this.tar = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // [1, 2, 3, 3, 3] -> len = 5 - 2 - 1
        this.arr.push(val);
        this.arr.sort((a, b) => a - b);
        // console.log("->", this.arr, val);
        return this.arr[this.arr.length - this.tar];
    }
}
