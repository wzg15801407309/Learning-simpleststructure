/**  LeetCode 热题 100 */
/** 第12题
 * 题目：给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 题意：xxxxxxx
 * 提示：1:对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 *      2:如果 s 中存在这样的子串，我们保证它是唯一的答案。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = (s, t) => {
  if (t.length > s.length) return "";
  const sLen = s.length;
  let needmap = {};
  for (const ch of t) {
    needmap[ch] = (needmap[ch] || 0) + 1;
  }
  let typeCnt = Object.keys(needmap).length; //目标字符种类数（有多少类型的字符）
  let left = 0; //滑动窗口左边界
  let right = 0; //滑动窗口右边界
  let minLen = Infinity; //表示最小字符串的长度 全局属性 Infinity 是一个数值，表示无穷大。
  let minSubStr = ""; //表示符合的最小子串
  while (right < sLen) {
    const charRight = s[right];
    if (charRight in needmap) {
      needmap[charRight]--;
      if (needmap[charRight] == 0) typeCnt--;
    }
    right++;
    while (typeCnt == 0) { // 包含了所有的目标字符
      if (right - left < minLen) {
        minLen = right - left;
        minSubStr = s.slice(left, right);
      }
      const charLeft = s[left];
      needmap[charLeft]++;
      if (needmap[charLeft] > 0) typeCnt++;
      left++;
    }
  }
  return minSubStr;
};