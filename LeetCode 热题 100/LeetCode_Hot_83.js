/**  LeetCode 热题 100 */
/** 第83题
 * 题目：跳跃游戏 II
 * 题解：给定一个长度为 n 的 0 索引整数数组 nums。
 *      初始位置为 nums[0]。每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
 *      返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
 * 方案名称：贪心算法
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  /**
      * 该方案使用贪心算法，我们的目标是到达数组的最后一个位置，因此我们可以考虑最后一步跳跃前所在的位置，
      * 该位置通过跳跃能够到达最后一个位置。如果有多个位置通过跳跃都能够到达最后一个位置，我们可以「贪心」
      * 地选择距离最后一个位置最远的那个位置，也就是对应下标最小的那个位置。因此，我们可以从左到右遍历数组
      * ，选择第一个满足要求的位置。找到最后一步跳跃前所在的位置之后，我们继续贪心地寻找倒数第二步跳跃前所
      * 在的位置，以此类推，直到找到数组的开始位置。
  */
  // 当前数组的最后一个数据的索引
  let currentIndex = nums.length - 1;
  // 当前步数
  let step = 0;
  // 当索引等于0时，证明已求得从0位置跳转到最后一个元素的位置的步数
  while (currentIndex > 0) {
    // 从左往右遍历
    for (let index = 0; index < currentIndex; index++) {
      // 选择能跳到当前位置且距离最远的那个位置
      if (nums[index] + index >= currentIndex) {
        currentIndex = index;
        step++;
      }
    }
  }
  return step;
};