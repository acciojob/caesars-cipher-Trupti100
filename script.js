function rot13(encodedStr) {
  const result = [];

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    if (char.match(/[A-Z]/)) {
      // If the character is an uppercase letter, apply ROT13 transformation
      const charCode = encodedStr.charCodeAt(i);
      const decodedCharCode = charCode >= 78 ? charCode - 13 : charCode + 13;
      result.push(String.fromCharCode(decodedCharCode));
    } else {
      // Non-alphabetic characters are passed as they are
      result.push(char);
    }
  }

  return result.join('');
}

// Example usage:
const encodedString = "SERR PBQR PNZC";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: "FREE CODE CAMP"
