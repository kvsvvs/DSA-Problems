function isPalindromeNumber(num) {
  function checkPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] === str[str.length - 1]) {
      return checkPalindrome(str.substring(1, str.length - 1));
    }
    return false;
  }
  return checkPalindrome(num.toString());
}
console.log(isPalindromeNumber(12321)); // true
console.log(isPalindromeNumber(123456)); // false
