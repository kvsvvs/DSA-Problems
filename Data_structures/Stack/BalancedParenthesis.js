import Stack from "./stack";

function isBalanced(expression) {
  let stack = new Stack();
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of expression) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false; // No matching opening bracket
      }
      let top = stack.pop();
      if (top !== matchingBrackets[char]) {
        return false; // The opening and closing brackets do not match
      }
    }
  }
  // If stack is not empty, there are unmatched opening brackets left
  return stack.isEmpty();
}

const expression = "{[(a+b)*(c+d)]}";
console.log(isBalanced(expression));
