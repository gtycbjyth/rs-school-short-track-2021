/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, el, index, arr) => {
    if (index === 0) {
      return el.reduce((a, elem) => a + elem, 0);
    }
    return acc + el.reduce((a, elem, ind) => {
      if (arr[index - 1][ind] !== 0) {
        return a + elem;
      }
      return a;
    }, 0);
  }, 0);
}

module.exports = getMatrixElementsSum;
