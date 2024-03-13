/**  LeetCode 热题 100 */
/** 第79题
 * 题目：下一个排列（整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。）
 * 题解：整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，
 *      那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 方案名称：xxxx
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
  // 向左遍历 i从倒数第二开始是为了num[i+1]要存在
  let i = nums.length - 2;
  // 寻找第一个小于右邻居的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  };
  // 在这个数在数组中存在，从它身后挑一个数，和它交换
  if (i >= 0) {
    // 从最后一项向左遍历
    let j = nums.length - 1;
    // 寻找第一个大雨nums[i]的数
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    };
    // 交换两个数 实现变大
    [nums[i], nums[j]] = [nums[j], nums[i]]
  };
  // 入股i=-1;说明递减排列，没有笑一排列，直接翻转最小排列
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    // 右边的数进行反转。使得变大的幅度小一些
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};