// const findSecondLargest = (arr) => {
//   if (!Array.isArray(arr) || arr.length < 2) {
//     return undefined;
//   }

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];
//     if (currentNumber > largest) {
//       secondLargest = largest;
//       largest = currentNumber;
//     } else if (currentNumber > secondLargest && currentNumber < largest) {
//       secondLargest = currentNumber;
//     }
//   }

//   if (secondLargest === -Infinity) {
//     return null;
//   }
//   return secondLargest;
// };

// console.log(
//   "findSecondLargest([0, 0, 1, 1, 0, 1, 2, 2, 3, 3, 4]):",
//   findSecondLargest([0, 0, 1, 1, 0, 1, 2, 2, 3, 3, 4])
// ); // Expected: 3
// console.log("findSecondLargest([10, 5, 20, 8, 25]):", findSecondLargest([10, 5, 20, 8, 25])); // Expected: 20
// console.log("findSecondLargest([-10, -5, -20, -8]):", findSecondLargest([-10, -5, -20, -8])); // Expected: -8
// console.log("findSecondLargest([7]):", findSecondLargest([7])); // Expected: undefined
// console.log("findSecondLargest([]):", findSecondLargest([])); // Expected: undefined
// console.log("findSecondLargest([5, 5, 5, 5]):", findSecondLargest([5, 5, 5, 5])); // Expected: null
// console.log("findSecondLargest([1, 2, 3]):", findSecondLargest([1, 2, 3])); // Expected: 2
// console.log("findSecondLargest([3, 2, 1]):", findSecondLargest([3, 2, 1])); // Expected: 2
// console.log("findSecondLargest([1, 2, 2, 3]):", findSecondLargest([1, 2, 2, 3])); // Expected: 2
// console.log("findSecondLargest([1, 1, 1, 1, 2]):", findSecondLargest([1, 1, 1, 1, 2])); // Expected: 1

console.time("do_toc_do_ham_dung_set"); // Bắt đầu bộ đếm thời gian với một nhãn
// Đoạn code bạn muốn đo
function findSecondLargest(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return undefined;
  }
  const uniqueSortedNums = [...new Set(nums)].sort((a, b) => b - a);
  if (uniqueSortedNums.length < 2) {
    return null;
  }
  return uniqueSortedNums[1];
}

const numA = Array.from({ length: 100000 }, (_, i) => Math.floor(Math.random() * 100000)); // Mảng lớn để thử nghiệm
findSecondLargest(numA);
console.timeEnd("do_toc_do_ham_dung_set"); // Kết thúc bộ đếm và in ra thời gian

console.time("do_toc_do_ham_2"); // Bắt đầu bộ đếm thời gian khác
// Đoạn code khác bạn muốn đo
function findSecondLargestOnePass(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return undefined;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (currentNum > largest) {
      secondLargest = largest;
      largest = currentNum;
    } else if (currentNum < largest && currentNum > secondLargest) {
      secondLargest = currentNum;
    }
  }

  if (secondLargest === -Infinity) {
    return null;
  }
  return secondLargest;
}

findSecondLargestOnePass(numA);
console.timeEnd("do_toc_do_ham_2"); // Kết thúc bộ đếm và in ra thời gian
