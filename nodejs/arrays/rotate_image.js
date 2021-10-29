// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// const matrix = [[1]]
// const matrix = [[1,2],[3,4]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let minX = 0
    let maxX = matrix.length - 1
    let minY = 0
    let maxY = matrix[0].length - 1

    while (minX < maxX && minY < maxY ) {

        let leftToRight = minX
        let upToDown = minY
        let right = maxX
        let down = maxY
        let left = minX
        let rightToLeft = maxX
        let downToUp = maxY

        while (leftToRight < maxX) {
            const leftUpItem = matrix[minY][leftToRight]
            const rightItem = matrix[upToDown][right]
            const rightDownItem = matrix[down][rightToLeft]
            const leftDownItem = matrix[downToUp][left]

            matrix[upToDown][right] = leftUpItem
            matrix[down][rightToLeft] = rightItem
            matrix[downToUp][left] = rightDownItem
            matrix[minX][leftToRight] = leftDownItem

            leftToRight++
            upToDown++
            rightToLeft--
            downToUp--
            console.log(`stage...`)
            printMatrix(matrix)
        }

        minX++
        maxX--
        minY++
        maxY--
    }

};

const printMatrix = function (matrix) {
    for (let x = 0; x < matrix.length; x++) {
        console.log(`[${matrix[x]}]`)
    }
}
printMatrix(matrix)

rotate(matrix)
