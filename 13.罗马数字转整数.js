/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */


// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let romanMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
  let isSmallLeft = (left, right) => {
    let leftNum = romanMap.get(left)
    let rightNum = romanMap.get(right)
    return leftNum * 5 == rightNum || leftNum * 10 == rightNum;
  }

  let strList = s.split('');
  return s.split('').reduce((result, roman, index) => {
    result = result + romanMap.get(roman);
    if (index > 0 && isSmallLeft(strList[index - 1], roman)) {
      result = result - romanMap.get(strList[index - 1]) * 2;
    }
    return result;
  }, 0);
};

// @lc code=end



romanToInt('III')


