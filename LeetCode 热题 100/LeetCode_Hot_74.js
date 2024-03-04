/**  LeetCode 热题 100 */
/** 第74题
 * 题目：LeetCode 热题 100/LeetCode_Hot_xx.js
 * 题解：给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 方案名称：堆+上浮下沉
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  // 交换
  const swap = (a, i, j) => {
    let temp = a[i];
    a[i] = a[j]
    a[j] = temp;
  };
  // 从左向右 自上而下 的 调整节点
  const maxHeapiy = (nums, i, heapSize) => {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let largest = i;
    if (l < heapSize && nums[l] > nums[largest]) {
      largest = l
    };
    if (r < heapSize && nums[r] > nums[largest]) {
      largest = r;
    };
    if (largest !== i) {
      // 节点交换
      swap(nums, i, largest);
      // 继续调整下面的节点
      maxHeapiy(nums, largest, heapSize);
    }
  };

  const buildMaxHezp = (nums, heapSize) => {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      maxHeapiy(nums, i, heapSize);
    }
  };
  let heapSize = nums.length;
  buildMaxHezp(nums, heapSize);
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i);
    --heapSize;
    maxHeapiy(nums, 0, heapSize);
  }
  return nums[0];
};