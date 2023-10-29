
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        matrix.forEach((item, i) => {
            if (i % 2) {
                item.reverse();
            }
            result = result.concat(item);
        });
    }
    return result;
}
