function isPalindrome(num) {
  if (num < 0) {
    return false;
  }

  let original = num;
  let reversed = 0;

  while (original > 0) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }

  return num === reversed;
}
