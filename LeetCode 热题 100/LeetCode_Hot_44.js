/**  LeetCode 热题 100 */
/** 第44题
 * 题目：二叉树的右视图
 * 题解：给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 方案名称：xxxx
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let rightSideView = (root) => {
  if (!root) return [];
  if (!root) return [];
  let arr = [];

  const dfs = (root, step, res) => {
    if (root) {
      if (res.length == step) {
        res.push(root.val);
      }
      dfs(root.right, step + 1, res);
      dfs(root.left, step + 1, res);
    }
  }
  dfs(root, 0, arr);
  return arr;
};