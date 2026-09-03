class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let ROWS = matrix.length,
            COLS = matrix[0].length;

        this.matrixSum = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0));
        for (let i = 0; i < ROWS; i++) {
            let prefix = 0;
            for (let j = 0; j < COLS; j++) {
                prefix += matrix[i][j];
                let above = this.matrixSum[i][j + 1];
                this.matrixSum[i + 1][j + 1] = prefix + above;
            }
        }
        console.log('->', this.matrixSum)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let r1 = row1 + 1,
            c1 = col1 + 1,
            r2 = row2 + 1,
            c2 = col2 + 1;
        let bottomRight = this.matrixSum[r2][c2];
        let above = this.matrixSum[r1 - 1][c2];
        let left = this.matrixSum[r2][c1 - 1];
        let top = this.matrixSum[r1 - 1][c1 - 1];
        console.log('->', r2, c2,bottomRight, above, left, top)
        return bottomRight - above - left + top;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
