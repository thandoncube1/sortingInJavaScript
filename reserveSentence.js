let s = "a good   example";
// let s = "  hello world  ";
// let s = "the sky is blue";
var reverseWords = function (s) {
  let result = [];
  // Split the s in to the number of seperate words
  let sentence = s.trim().split(" ");

  for (let word in sentence) {
    // Get the last word of the sentence until you reach the first word
    let lastWord = sentence[sentence.length - 1 - word];
    // Trim space from the last word
    lastWord = lastWord.trim();
    // Remove empty string from the array
    if (lastWord !== "") {
      // Push the last word to the result array
      result.push(lastWord);
    }
  }

  // return the result array with a join and a space around the words
  return result.join(" ");
};

let response = reverseWords(s);
console.log(response);