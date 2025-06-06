var nums = [2, 0, 11, 15, 7];
// var nums = [3, 3];
var target = 6;

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
    console.log(map);
  }
  return null;
};

twoSum(nums, target);
console.log(twoSum(nums, target));

var num = 121;
// console.log(num.toString().length);
