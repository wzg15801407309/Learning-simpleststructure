/**  LeetCode 热题 100 */
/** 第68题
 * 题目：括号生成
 * 题解：数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 方案名称：xxxx
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  // 结果集
  const res = [];
  /**
   * 定义递归函数
   * @param {*} lRemain  左括号剩下的数量
   * @param {*} rRemain  右括号剩下的数量
   * @param {*} str 当前构建的字符串
   */
  const dfs = (lRemain, rRemain, str) => {
    // 字符串构建完成 递归结束的条件
    if (str.length == 2 * n) {
      res.push(str);
      return;
    }
    // 只要左括号有剩，咋们剧可以选择左括号，然后继续选择
    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + '(');
    }
    // 当右括号比左括号剩的多才能选择右括号
    if (lRemain < rRemain) {
      dfs(lRemain, rRemain - 1, str + ')');
    }
  }
  dfs(n, n, '');
  return res
};