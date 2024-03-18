/**  LeetCode 热题 100 */
/** 第82题
 * 题目：跳跃游戏
 * 题解：给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 *      数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 * 方案名称：xxxx
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  // 记录最大能抵达的索引
  let maxJumpIndex = 0;
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 如果maxJumpIndex大于等于当前元素索引 证明能抵达当前元素
    if (i <= maxJumpIndex) {
      /**
       *  获取当前元素能跳跃到的最大索引，也就是当前元素能抵达的索引nums[i]+i与之前记录的能抵达的
       * 最大索引值maxJumpIndex的最大值
       */
      maxJumpIndex = Math.max(maxJumpIndex, nums[i] + i);
      if (maxJumpIndex >= nums.length - 1) return true;
    } else {
      // 否则 无法叨叨终点
      return false;
    }
  }
};