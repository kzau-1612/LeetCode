// var searchInsert = function (nums, target) {
//   var mid = 0;
//   var low = 0;
//   var high = nums.length - 1;

//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return low;
// };

// const nums = [1, 3, 5, 6];

// console.log(searchInsert(nums, 3));

var searchInsert = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;

  console.log("--- Bắt đầu tìm kiếm ---");
  console.log(`Mảng: [${nums}], Target: ${target}`);
  console.log(`Khởi tạo: low = ${low}, high = ${high}`);

  // Bắt đầu vòng lặp tìm kiếm nhị phân
  while (low <= high) {
    var mid = Math.floor((low + high) / 2); // Tính chỉ mục giữa
    console.log(`\n--- Vòng lặp mới ---`);
    console.log(`Hiện tại: low = ${low}, high = ${high}`);
    console.log(`Tính mid = Math.floor((${low} + ${high}) / 2) = ${mid}`);
    console.log(`nums[mid] (${nums[mid]}) so với target (${target})`);

    // So sánh phần tử ở giữa với target
    if (nums[mid] === target) {
      console.log(`=> Đã tìm thấy target (${target}) tại chỉ mục ${mid}.`);
      return mid; // Trả về chỉ mục nếu tìm thấy
    } else if (nums[mid] < target) {
      console.log(
        `=> nums[mid] (${nums[mid]}) nhỏ hơn target (${target}). Chuyển sang tìm kiếm ở nửa phải.`
      );
      low = mid + 1; // Di chuyển low sang phải
      console.log(`Cập nhật: low = ${low}, high = ${high}`);
    } else {
      // nums[mid] > target
      console.log(
        `=> nums[mid] (${nums[mid]}) lớn hơn target (${target}). Chuyển sang tìm kiếm ở nửa trái.`
      );
      high = mid - 1; // Di chuyển high sang trái
      console.log(`Cập nhật: low = ${low}, high = ${high}`);
    }
  }

  // Nếu vòng lặp kết thúc mà không tìm thấy target
  console.log(`\n--- Vòng lặp kết thúc ---`);
  console.log(`low (${low}) hiện lớn hơn high (${high}). Target (${target}) không có trong mảng.`);
  console.log(`Vị trí chèn sẽ là low = ${low}.`);
  return low; // Trả về low, đây là vị trí chèn phù hợp
};

// --- Ví dụ sử dụng ---
console.log("Ví dụ 1: nums = [1,3,5,6], target = 5");
searchInsert([1, 3, 5, 6], 5);
console.log("\n------------------------------------\n");

console.log("Ví dụ 2: nums = [1,3,5,6], target = 2");
searchInsert([1, 3, 5, 6], 2);
console.log("\n------------------------------------\n");

console.log("Ví dụ 3: nums = [1,3,5,6], target = 7");
searchInsert([1, 3, 5, 6], 7);
console.log("\n------------------------------------\n");

console.log("Ví dụ 4: nums = [1,3,5,6], target = 0");
searchInsert([1, 3, 5, 6], 0);
console.log("\n------------------------------------\n");
