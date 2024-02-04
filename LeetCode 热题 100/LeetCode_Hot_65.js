/**  LeetCode 热题 100 */
/** 第65题
 * 题目：子集
 * 题解：给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 条件：解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 方案名称：递归+回溯
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = (nums) => {
  const t = [];
  const ans = [];
  const dfs = curr => {
    // 递归终止条件
    if (curr == nums.length) {
      ans.push(t.slice());
      return
    }
    console.error('1', curr);
    t.push(nums[curr]);
    console.error('2', t);
    dfs(curr + 1);
    // 也是移除数组的最后一数据
    t.pop(t.length - 1);
    console.log('3', t);
    dfs(curr + 1);
  }
  dfs(0);
  return ans
};