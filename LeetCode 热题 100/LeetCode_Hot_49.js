/**  LeetCode 热题 100 */
/** 第49题
 * 题目：二叉树中的最大路径和
 * 题解：路径和 是路径中各节点值的总和。
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
 * @return {number}
 */
let maxPathSum = (root) => {
  // 最大路径和
  let maxSum = Number.MIN_SAFE_INTEGER;
  const dfs = root => {
    if (root == null) return 0;
    //左子树提供的最大路径和
    const left = dfs(root.left);
    // 右子树提供最大路径和
    const right = dfs(root.right);
    // 当前子树内部的最大路径和
    const innerMaxSum = left + root.val + right;
    // 最大记录是那个
    maxSum = Math.max(maxSum, innerMaxSum);
    const outputMaxSum = root.val + Math.max(0, left, right);
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }
  dfs(root);
  return maxSum;
};
