/**  LeetCode 热题 100 */
/** 第37题
 * 题目：翻转二叉树
 * 题解：给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 方案名称：递归
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let invertTree = (root) => {
  if (root == null) {
    return root
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.right = left;
  root.left = right;
  return root
};
