/*const board =
        [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]*/

/*const board =
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]*/

/*const board =
    [[".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]*/

const board =
    [[".",".",".",".",".",".","5",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    ["9","3",".",".","2",".","4",".","."],
    [".",".","7",".",".",".","3",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".","3","4",".",".",".","."],
    [".",".",".",".",".","3",".",".","."],
    [".",".",".",".",".","5","2",".","."]]


var isValidSudokuWithDimensions = function (board, startRow, maxRow, startCol, maxCol, checkBlock) {
        let numbersOfTheCol = new Map()
        let blockNumbers = new Set()
        for (let row = startRow; row < maxRow; row++) {
                let numbersOfTheRow = new Set()

                for (let col = startCol; col < maxCol; col++) {
                        const number = board[row][col]
                        if (number !== ".") {
                                const setNumbersOfCol = numbersOfTheCol.get(col) || new Set
                                numbersOfTheCol.set(col, setNumbersOfCol)
                                if (number < 1 || number > 9 || numbersOfTheRow.has(number) || setNumbersOfCol.has(number)) {
                                        return false
                                } else if (checkBlock && blockNumbers.has(number)) {
                                        return false
                                } else {
                                        numbersOfTheRow.add(number)
                                        setNumbersOfCol.add(number)
                                        blockNumbers.add(number)
                                }
                        }

                        if (row > 0 && col > 0 && (row % 3) === 0 && (col % 3) === 0) {
                                console.log(`Dimension row: ${row - 3} - ${row}, col: ${col - 3} - ${col}`)
                                if (!isValidSudokuWithDimensions(board, (row - 3), row - 1, (col - 3), col - 1, true))
                                        return false
                        }
                }

                console.log(blockNumbers)
                console.log(numbersOfTheCol)
                numbersOfTheRow = new Set()
        }
        return true
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
        return isValidSudokuWithDimensions(board, 0, board.length, 0, board[0].length)
};

console.log(isValidSudoku(board))