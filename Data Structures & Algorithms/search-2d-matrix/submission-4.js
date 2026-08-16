class Solution {
    binarySearch(arr, trg) {
        let l = 0,
            r = arr.length - 1,
            mid = 0;
        while (l <= r) {
            mid = Math.floor((l + r) / 2);
            if (trg < arr[mid]) {
                r = mid - 1;
            } else if (trg > arr[mid]) {
                l = mid + 1;
            } else {
                return mid;
            }
            // break;
        }
        return -1;
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) {
            return false;
        }

        let l = 0;
        let r = matrix.length - 1;
        let row = -1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
                row = mid;
                break;
            }

            if (target < matrix[mid][0]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        if (row === -1) {
            return false;
        }

        return this.binarySearch(matrix[row], target) !== -1;
    }
}
