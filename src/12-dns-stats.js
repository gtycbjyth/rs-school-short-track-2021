/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let adress;
  // console.log(domains);
  for (let i = 0; i < domains.length; i++) {
    adress = domains[i].split('.').reverse();
    // console.log(adress);
    adress.reduce((acc, item) => {
      acc += `.${item}`;// eslint-disable-line no-param-reassign
      if (res[acc] > 0) {
        res[acc]++;
      } else {
        res[acc] = 1;
      }
      return acc;
    }, '');
    // console.log(res);
  }
  return res;
}

module.exports = getDNSStats;
