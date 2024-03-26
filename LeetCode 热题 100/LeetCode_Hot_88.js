/**  LeetCode 热题 100 */
/** 第88题
 * 题目：单词拆分
 * 题解：给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * 方案名称：动态规划
 */

const { workerData } = require("worker_threads");

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const goods = wordDict;
  const bagSize = s.length;
  const dp = new Array(bagSize + 1).fill(false);
  // 字符串长度为i dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词；
  dp[0] = true;
  // 排列问题 先遍历背包在遍历物品
  for (let i = 1; i <= bagSize; i++) {
    for (let j = 0; j < i; j++) {
      // str 从j位开始i位结束
      // 如果dp[j] 是true 且【i，j】这个区域间的子串，那么dp[i]一定是true(j<i)
      // 所以递推公式是 if([j,i])这个区间的子串在字典里 && dp[j]是true 那么dp[i] = true;
      const str = s.substring(j, i);
      if (goods.includes(str) && dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
  // at数组从后向前取数
  return dp.at(-1);
};