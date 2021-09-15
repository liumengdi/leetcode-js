/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */


// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const arr = s.split('');

  const result = []
  arr.forEach((char, index) => {
    const cutted = arr.slice(index)
    const strs = []
    for (let i = 0; i < cutted.length; i++) {
      if (strs.includes(cutted[i])) {
        result.push(strs)
        break;
      }else {
        strs.push(cutted[i])
      }
    }
    result.push(strs)
  })
  console.log(result)
  const maxStrs = result.reduce((res, strs) => {
    if (res.length < strs.length) {
      res = strs
    }
    return res;
  },[]);
  return maxStrs.length;

};


function lengthOfLongestSubstring2(s) {
  const map = {};
  var left = 0;
  
  return s.split('').reduce((max, v, i) => {
      left = map[v] >= left ? map[v] + 1 : left;
      map[v] = i;
      return Math.max(max, i - left + 1);
  }, 0);
}
// @lc code=end

  