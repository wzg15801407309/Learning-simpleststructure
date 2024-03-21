/**  LeetCode 热题 100 */
/** 第85题
 * 题目：划分字母区间
 * 题解：给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。返回一个表示每个字符串片段的长度的列表。
 * 方案名称：贪心
 */
/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = (s) => {
  const last = new Array(26);
  const len = s.length;
  const condePointA = 'a'.codePointAt(0);
  for (let i = 0; i < len; i++) {
    last[s.codePointAt(i) - condePointA] = i;
  };
  const partition = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < len; i++) {
    end = Math.max(end, last[s.codePointAt(i) - condePointA]);
    if (i == end) {
      partition.push(end - start + 1);
      start = end + 1;
    }
  }
  return partition;
};