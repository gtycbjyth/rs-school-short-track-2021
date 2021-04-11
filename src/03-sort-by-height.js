/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ar = [...arr].sort((a, b) => a - b);
  return arr.reverse().reduce((acc, item) => {
    if (item !== -1) {
      acc.push(ar[ar.length - 1]);
      ar.length -= 1;
      return acc;
    } acc.push(-1);
    return acc;
  }, []).reverse();
}

module.exports = sortByHeight;
