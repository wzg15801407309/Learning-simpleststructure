/**  LeetCode 热题 100 */
/** 第47题
 * 题目：路径总和 III
 * 题解：给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 说明：路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
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
 * @param {number} targetSum
 * @return {number}
 */
let rootSum = (root, tagetsum) => {
  let ret = 0;
  if (root == null) {
    return 0;
  }
  let val = root.val;
  if (val === tagetsum) {
    ret++;
  }
  ret += rootSum(root.left, tagetsum - val);
  ret += rootSum(root.right, tagetsum - val);
  return ret;
};
let pathSum = (root, targetSum) => {
  // 穷举+递归
  if (root == null) {
    return 0;
  }
  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);

  return ret;
};
