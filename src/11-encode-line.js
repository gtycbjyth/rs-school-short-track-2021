/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  [...str].reduce((acc, item, index, arr) => {
    if (acc.includes(item) || acc.length === 0) {
      acc.push(item);
      if (index === (arr.length - 1)) {
        if (acc.length > 1) {
          res.push(`${acc.length}${acc[0]}`);
        } else {
          res.push(`${acc[0]}`);
        }
      }
    } else {
      if (acc.length > 1) {
        res.push(`${acc.length}${acc[0]}`);
      } else {
        res.push(`${acc[0]}`);
      }
      acc.length = 0;
      acc.push(item);
      if (index === (arr.length - 1)) {
        res.push(`${acc[0]}`);
      }
    }
    return acc;
  }, []);
  return res.join('');
}

module.exports = encodeLine;
