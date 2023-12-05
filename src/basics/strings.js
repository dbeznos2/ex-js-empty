/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} true if n is bigger than 2
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof needle !== 'string' || typeof haystack !== 'string' || typeof newWord !== 'string') {
    throw new Error("unsupported types");
  }
  const regex = new RegExp(needle, 'gi');

  return haystack.replace(regex, (match) => {
    let newWordUp = '';

    for (let i = 0; i < match.length; i++) {
      if (i >= newWord.length) {
        return newWordUp;
      }
      newWordUp += (match[i] === match[i].toUpperCase()) ? newWord[i].toUpperCase() : newWord[i].toLowerCase();
    }
    return newWordUp;
  });
}