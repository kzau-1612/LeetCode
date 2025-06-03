// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
  let stack = [];
  for (let i of s) {
    if (i === "(" || i === "[" || i === "{") {
      stack.push(i);
    } else if (i === ")" || i === "]" || i === "}") {
      if (stack.length === 0) return false;
      let last = stack.pop();
      if ((last === "(" && i !== ")") || (last === "[" && i !== "]") || (last === "{" && i !== "}"))
        return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

console.log(isValid("["));
