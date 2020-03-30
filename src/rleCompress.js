'use strict';

/**
 * Implement rleCompress function:
 *
 * Function takes string argument and returns compressed string.
 * Compression algorithm is the following: 2 and more identical
 * letters in a row are replaced with the letter and count of
 * repeating (don’t add number 1 for one letter)
 *
 * rle('A') === 'A'
 * rle('ABC') === 'ABC'
 * rle('AABDE') === 'A2BDE'
 * rle('ABGGGDKKKUKKF') === 'ABG3DK3UK2F'
 *
 * @param {string} source
 *
 * @return {string}
 */
function rleCompress(source) {
  let newSource = "";
  for (let i = 0; i < source.length ; i++) {
    let counter = 1;
    while (source[i] === source[i + 1]) {
        counter++;
        i++;
    }
    if (counter > 1) {
      newSource += source[i] + `${counter}`;//source.replace(source.slice(i + 1, i + counter + 1), counter);
    }
    else {
      newSource += source[i];
    }
  }
  return newSource;
}

module.exports = rleCompress;
