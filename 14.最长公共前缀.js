/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  let compareStr = (str1, str2) => {
    let splitedStr2 = str2.split('');
    let result = '';

    for (let i = 0; i <= str1.split('').length; i++ ) {
      let item = str1.split('')[i];
      if (item && splitedStr2[i] === item) {
        result = result + item;
      } else {
        break;
      }
    }
    return result;
  };

  return strs.reduce((res, item, index) => {
    res = compareStr(res, item);
    return res;
  }, strs[0]);

};
// @lc code=end

