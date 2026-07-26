class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        return String(BigInt(digits.join('')) +1n).split('').map(Number)
    }
}
