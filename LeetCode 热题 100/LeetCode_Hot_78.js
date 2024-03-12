/**  LeetCode 热题 100 */
/** 第78题
 * 题目：颜色分类
 * 题解：给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。必须在不使用库内置的 sort 函数的情况下解决这个问题。
 * 方案名称：3个指针
 */

const { constants } = require("buffer");


/** 思路
 * 0\1\2 分别代表红色、白色、蓝色
 * 我们可以设置3个指针，一个指向头部，一个指向尾部、一个指向当前遍历的元素
 * 我们从头部开始遍历数组，如果遇到0 （红色），就把她放到头部指针的位置
 * 如果遇到2（蓝色）就把它放在尾部指针
 * 如果遇到的事1（白色）就跳过
*/

/** 交换的方法 */

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      swap(nums, i, left);
      left++;
    } else if (nums[i] === 2) {
      swap(nums, i, right);
      right--;
      i--;
    }
  }
};