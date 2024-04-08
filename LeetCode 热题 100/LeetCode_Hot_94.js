/**  LeetCode 热题 100 */
/** 第94题
 * 题目：最长回文子串 【给你一个字符串 s，找到 s 中最长的回文子串】
 * 题解：如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * 方案名称：中心扩散法
 */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (s.length < 2) {
    return s;
  }
  const helper = (m, n) => {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    // 注意此处的m、n的纸循环后 是恰好不满足循环条件的时刻
    // 此时m到n的距离是n-m+1，但是m、n两个边界不能取，所以应该取m+1到n-1的区间 长度是n-m-1
    if (n - m - 1 > res.length) {
      res = s.slice(m + 1, n);
    }
    return res;
  }
  let res = '';
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, j);
    // 回文子串长度偶数
    helper(i, i + 1);
  }
  return res;
};
