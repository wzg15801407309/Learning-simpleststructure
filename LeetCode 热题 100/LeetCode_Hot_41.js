/**  LeetCode 热题 100 */
/** 第41题
 * 题目:将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  const buildBST = (nums, start, end) => {
    if (start > end) {
      return null;
    }

    // 求数组的中间索引
    const midndex = (start + end) >>> 1;
    const root = new TreeNode(nums[midndex]);

    root.left = buildBST(nums, start, midndex - 1);
    root.right = buildBST(nums, midndex + 1, end);

    return root;
  }

  return buildBST(nums, 0, nums.length - 1);
};