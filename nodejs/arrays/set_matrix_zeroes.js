// const matrix = [[1,1,1],[1,0,1],[1,1,1]]
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
const matrix = [[0,1]]

const setColumn = function (matrix, index) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][index] = 0
    }
}

const setRow = function (matrix, index) {
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[index][i] = 0
    }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    const foundRowIndexes = []
    const foundColumnIndexes = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                foundRowIndexes.push(i)
                foundColumnIndexes.push(j)
            }
        }
    }

    console.log(foundRowIndexes)
    console.log(foundColumnIndexes)
    for (let i = 0; i < foundRowIndexes.length; i++) {
        setRow(matrix, foundRowIndexes[i])
        console.log(matrix)
    }
    for (let i = 0; i < foundColumnIndexes.length; i++) {
        console.log(foundColumnIndexes[i])
        setColumn(matrix, foundColumnIndexes[i])
        console.log(matrix)
    }

};

setZeroes(matrix)
console.log(matrix)