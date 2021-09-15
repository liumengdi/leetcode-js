/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let isOverflow = (num) => num < Math.pow(2, 31) * -1 || num > Math.pow(2, 31) - 1

  if (isOverflow(x)) return 0;
  
  let result = 0;
  if (x < 0) {
      result = (x * -1).toString().split('').reverse().join('') * -1;
  } else {
    result = x.toString().split('').reverse().join('');
  }

  if (isOverflow(result)) {
    return 0
  }else {
    return result;
  }


};
// @lc code=end

