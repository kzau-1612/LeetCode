// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

var areOccurrencesEqual = function (s) {
  const charFrequencies = {}; // Dùng object để lưu tần suất ký tự

  // Bước 1: Đếm tần suất của mỗi ký tự
  for (const char of s) {
    charFrequencies[char] = (charFrequencies[char] || 0) + 1;
  }

  let targetFrequency = -1; // Biến để lưu tần suất mục tiêu

  // Bước 2: Kiểm tra sự đồng nhất của tần suất
  for (const char in charFrequencies) {
    const currentFrequency = charFrequencies[char];

    if (targetFrequency === -1) {
      // Gán tần suất của ký tự đầu tiên gặp được
      targetFrequency = currentFrequency;
    } else if (currentFrequency !== targetFrequency) {
      // Nếu có bất kỳ tần suất nào khác với tần suất mục tiêu, trả về false
      return false;
    }
  }

  // Nếu duyệt qua hết mà không có sự khác biệt, trả về true
  return true;
};

const s = "abacbc";
areOccurrencesEqual(s);
