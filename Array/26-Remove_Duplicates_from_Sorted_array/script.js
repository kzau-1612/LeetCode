var numA = [0, 0, 1, 1, 0, 1, 2, 2, 3, 3, 4];

//Time Complexity O(n^2)
//Space Complexity O(n)

// var removeDuplicates = function (nums) {
//   var uniqueNums = [];
//   var num = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let isExist = uniqueNums.some((n) => n === nums[i]);
//     if (!isExist) {
//       uniqueNums.push(nums[i]);
//       num++;
//     }
//   }
//   console.log(typeof uniqueNums.length);
//   return uniqueNums.length;
// };

//Time Complexity O(n^2)
//Space Complexity O(n)

// var removeDuplicates = function (nums) {
//   var uniqueNums = nums.reduce((acc, cur) => {
//     if (!acc.includes(cur)) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []);
//   return uniqueNums;
// };

//Time Complexity O(n)
//Space Complexity O(n) --> Fastest
var numA = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var uniqueArray = [...new Set(numA)];
var sortedArray = uniqueArray.sort((a, b) => {
  return b - a;
});
console.log(sortedArray);

// console.log(removeDuplicates(numA));
