/**  LeetCode 热题 100 */
/** 第-题
 * 题目：两数之和
 * 题意：给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 提示：只会存在一个有效答案
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// let twoSum = (nums, target) => {
//   const prevNums = {}; // 做了一个类似map的对像
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     const curNum = nums[i];
//     const targetNum = target - curNum;
//     const targetNumIndex = prevNums[targetNum]
//     if (!targetNumIndex) {
//       return [targetNumIndex, i]
//     } else {
//       prevNums[curNum] = i;
//     }
//   }
// };
// map 来实现
let twoSum = (nums, target) => {
  let mymap = new Map();
  let len = nums.length;
  for (let index = 0; index < len; index++) {
    if (mymap.has * (target - nums[index])) {
      return [mymap.get(target - nums[index]), index]
    } else {
      mymap.set(nums[index], index)
    }
  }
};