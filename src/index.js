

module.exports = function towelSort (matrix) {
    let arr = [];
    for (i = 0; i < matrix.length; i++) {
        arr=i%2==0?arr.concat(matrix[i]):arr.concat(matrix[i].reverse());
    }
    return arr;
}