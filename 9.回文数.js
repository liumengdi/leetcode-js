/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let reversed = x.toString().split('').reverse().join('');
  if (reversed === x.toString()) {
    return true;
  }
  return false;
};
// @lc code=end

