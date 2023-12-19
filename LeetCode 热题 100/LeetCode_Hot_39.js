/**  LeetCode 热题 100 */
/** 第39题
 * 题目：二叉树的直径

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
 * @return {boolean}
 */
let isSymmetric = (root) => {
  // 递归的方式
  if (root == null) return true;
  // 定义一个递归函数
  const isSymmetricHelper = (left, right) => {
    if (left == null && right == null) return true;
    if (left == null || right == null || left.val != right.val) return false;

    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
  }
  return isSymmetricHelper(root.left, root.right)
};

