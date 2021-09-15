/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// MARK: 复杂度O(n^2)

/**
 * forEach 循环, return 不能跳出
 */
// var twoSum = function(nums, target) {

//   let result = [];
//   nums.forEach((num, index) => {
//     const combIndex = nums.findIndex(ele => ele + num === target)\
//     if(combIndex != -1) {
//       result = [index, combIndex]
//     }
//   })
//   return result
// };


// MARK: 复杂度O1
var twoSum = function(nums, target) { 
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i);
    } else {
      return [map.get(target - nums[i]), i];
    }
  }
  return []
}



// @lc code=end

