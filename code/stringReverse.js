/**
 * Reverses a given string.
 *
 * @param {string} str - The input string to be reversed.
 * @return {string} The reversed string.
 */
function reverseString(str) {
  if (!str) {
    throw new Error("Input string is null or undefined.");
  }
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverse(""));
