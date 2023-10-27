/**  LeetCode 热题 100 */
/** 第九题
 * 题目：找到字符串中所有字母异位词
 * 题意：给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 条件：s 和 p 仅包含小写字母
 */

const { Array } = require("core-js");

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = (s, p) => {
  const lenP = p.length;
  const lenS = s.length;
  if (lenS < lenP) return [];
  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < lenP; i++) {
    // 这是什么意思
    ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
  }
  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }
  for (let i = 0; i < lenS - lenP; ++i) {
    --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++sCount[s[i + lenP].charCodeAt() - 'a'.charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};