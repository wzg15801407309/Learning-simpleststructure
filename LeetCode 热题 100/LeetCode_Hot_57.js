/**  LeetCode 热题 100 */
/** 第57题
 * 题目：寻找两个正序数组的中位数
 * 题解：给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 方案名称：xxxx
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = (nums1, nums2) => {
  let len = parseInt((nums1.length + nums2.length) / 2)
  nums1.push(Infinity);
  nums2.push(Infinity);
  //合并两个数组
  let newArr = [];
  for (let i = 0, z = 0, j = 0; i <= len; i++) {
    if (nums1[z] < nums2[j]) {
      newArr.push(nums1[z]);
      z++;
    } else {
      newArr.push(nums2[j]);
      j++;
    }

  }
  return (nums1.length + nums2.length) % 2 ? newArr[newArr.length - 1] : (newArr[newArr.length - 1] + newArr[newArr.length - 2]) / 2
};