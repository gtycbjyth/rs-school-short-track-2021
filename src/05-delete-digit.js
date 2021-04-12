/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // const array = [...n];
  // console.log(array);
  const array = String(n).split('');
  const numbers = [];
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    array.splice(i, 1);
    const number = Number(array.join(''));
    numbers.push(number);
    array.splice(i, 0, temp);
  }
  return Math.max(...numbers);
}

module.exports = deleteDigit;
