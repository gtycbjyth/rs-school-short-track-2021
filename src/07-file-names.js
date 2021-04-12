/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniq = [];
  for (let i = 0; i < names.length; i++) {
    let k = 1;
    const temp = names[i];
    let item = names[i];
    if (!uniq.includes(item)) {
      uniq.push(item);
    } else {
      item = `${temp}(${k})`;
      while (uniq.includes(item)) {
        k++;
        item = `${temp}(${k})`;
      }
      uniq.push(item);
    }
  }
  return uniq;
}

module.exports = renameFiles;
