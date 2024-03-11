/**  LeetCode 热题 100 */
/** 第77题
 * 题目：多数元素
 * 题解：给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 方案名称:哈希
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let half = nums.length / 2;
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      let currCount = map.get(num)
      map.set(num, currCount + 1);
    } else {
      map.set(num, 1);
    }
    if (map.get(num) > half) return num;
  }
};