/**  LeetCode 热题 100 */
/** 第38题
 * 题目：二叉树的直径
 * 题解：二叉树的直径是指：树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
 * 方法：左节点高度 + 右节点高度 + 1 递归
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
 * @return {number}
 */
let diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;
  let dfs = node => {
    if (node == null) return 0;
    // 左子树为根节点的深度
    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
    return Math.max(leftMax, rightMax) + 1;
  }
  dfs(root);
  return maxDiameter
};

