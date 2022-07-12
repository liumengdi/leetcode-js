
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// let a = [0,0,1,1,1,2,2,3,3,4]
// 暴力解法, 双循环
var removeDuplicates = function(nums) {
  let counter = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item === '_') continue;
    for (let j = i + 1; j < nums.length; j++) {
      let itemNext = nums[j];
      if (itemNext > item || itemNext === '_') {
        break;
      } else {
        nums.splice(j, 1);
        nums.push('_')
        j--;
        counter--;
      }
    }
  }
  return counter;
};

// [1,1,2]
// 双指针滑动
var removeDuplicates2 = function(nums) {
  if (!nums || !nums.length) return 0;
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[p]) {
      p++;
      nums[p] = nums[i];
    }
  }
  return p + 1;
}

// let b = removeDuplicates(a);
// console.log(b)
// @lc code=end

