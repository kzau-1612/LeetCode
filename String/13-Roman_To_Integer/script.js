// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/* Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used: */

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const string = "MCMXCIV";

// var romanToInt = function (s) {
//   var a = s.trim().split("");
//   var result = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === "I") {
//       if (a[i + 1] === "V") {
//         result += 4;
//         i++;
//       } else if (a[i + 1] === "X") {
//         result += 9;
//         i++;
//       } else {
//         result += 1;
//       }
//     } else if (a[i] === "V") {
//       result += 5;
//     } else if (a[i] === "X") {
//       if (a[i + 1] === "L") {
//         result += 40;
//         i++;
//       } else if (a[i + 1] === "C") {
//         result += 90;
//         i++;
//       } else {
//         result += 10;
//       }
//     } else if (a[i] === "L") {
//       result += 50;
//     } else if (a[i] === "C") {
//       if (a[i + 1] === "D") {
//         result += 400;
//         i++;
//       } else if (a[i + 1] === "M") {
//         result += 900;
//         i++;
//       } else {
//         result += 100;
//       }
//     } else if (a[i] === "D") {
//       result += 500;
//     } else if (a[i] === "M") {
//       result += 1000;
//     }
//   }
//   return result;
// };

var romanToInt = function (s) {
  var a = s.trim().split("");
  var result = 0;
  var roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < a.length; i++) {
    if (roman[a[i]] < roman[a[i + 1]]) {
      result -= roman[a[i]];
    } else {
      result += roman[a[i]];
    }
  }
  return result;
};

console.log(romanToInt(string));
