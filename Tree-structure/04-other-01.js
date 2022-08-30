/** 
 * 题目 合并两个有序数组
 * 题意 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 注意：合并后的数据的数据全部放在nums1中
 */

console.log('************* me start ****************')
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 const merge = (nums1, m, nums2, n)=> {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};
console.log('************* me end ******************')


console.log('************* normal start ****************')
console.log('************* normal end ******************')