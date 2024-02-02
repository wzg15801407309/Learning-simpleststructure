/**  LeetCode 热题 100 */
/** 第64题
 * 题目：全排列
 * 题解：给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 方案名称：回溯算法+递归
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const res = [];
  const path = [];
  const backtrancking = (n, k, used) => {
    if (path.length == k) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue;
      path.push(n[i]);
      used[i] = true;
      backtrancking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
  backtrancking(nums, nums.length, []);
  return res;
};