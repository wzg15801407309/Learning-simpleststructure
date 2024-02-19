/**  LeetCode 热题 100 */
/** 第66题
 * 题目：电话号码的字母组合
 * 题解：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 知道：电话按键的 1-9对应的字母  
 *  1 不对应任何字母
 *  2 abc
 *  3 def
 *  4 ghi
 *  5 jkl
 *  6 mno
 *  7 pqrs
 *  8 tuv
 *  9 wxyz
 * 方案名称：回溯 === 二叉树递归 === 穷举
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const k = digits.length;
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  if (!k) return [];
  if (k === 1) return map[digits].split("");
  // 定义全局变量
  const res = [], path = [];
  // 定义回溯函数
  const backtracking = (n, k, a) => {
    // 递归结束条件
    if (path.length == k) {
      // join 是把数组转为字符串  jion函数的参数是字符连接符号
      res.push(path.join(""));
      return;
    };
    for (const v of map[n[a]]) {
      path.push(v);
      backtracking(n, k, a + 1);
      path.pop();
    }
  }

  backtracking(digits, k, 0);
  return res;
};