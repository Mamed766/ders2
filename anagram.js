function isAnagram(str1, str2) {
  var firstWord = str1.toLowerCase().split("").sort().join("");
  var secondWord = str2.toLowerCase().split("").sort().join("");

  return firstWord === secondWord;
}

console.log(isAnagram("damirli", "ilrimad"));

function reverse(word) {
  var reversedWord = "";

  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  return word === reversedWord;
}
