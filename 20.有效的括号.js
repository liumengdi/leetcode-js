/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/** []{}
(

  (){}[]
  [{[]}()]


) * @param {string} s
 * @return {boolean}
 */
let params = '()';
var isValid = function(s) { 
  let charList = s.split('');
  let openTags = ['(', '[', '{'];
  let tagPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let pendingCloseTagList = [];
  for (let i = 0; i < charList.length; i++) {
    let tag = charList[i];
    if (openTags.includes(tag)) {
      pendingCloseTagList.push(tag);
    } else {
      let pendingCloseTag = pendingCloseTagList.pop();
      if (!pendingCloseTag || tagPairs[pendingCloseTag] != tag) {
        return false;
      }
    }
  }
  if (pendingCloseTagList.length > 0) return false;
  return true;

};
let b = isValid(params)
// @lc code=end

/**
 * 问题: 
 * 1. tagPairs 应该是对象,  写成了数组
 * 2. pendingCloseTagList应该push进来tag, push错了'
 * 3. js 数组pop 修改原数组, 返回最后一元素并删除, 空数组返回undefined
 */
