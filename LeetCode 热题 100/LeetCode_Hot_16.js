/**  LeetCode 热题 100 */
/** 第16题
 * 题目：除自身以外数组的乘积
 * 阐述：给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 提示：题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 限制条件：请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = (nums) => {
  // // 我的解法 暴力解法 遍历   时间太久了
  // let len = nums.length;
  // let ans = [];
  // for (let i = 0; i < len; i++) {
  //   var total = 1;
  //   for (let j = 0; j < len; j++) {
  //     if (j != i) {
  //       total *= nums[j];
  //     }
  //   }
  //   ans.push(total);
  // }
  // return ans;
  // 执行 96ms 的方法
  let zeros = [];
  let l = nums.reduce((l, i, idx) => {
    if (i === 0) zeros.push(idx);
    //在JavaScript 中，两个问号(??)是双空格的简写。
    //它的作用是当表达式的值为null 或undefined 时，返回一个默认值。 
    //这个运算符在ECMAScript 2020 中被引入，所以只有在支持ECMAScript 2020 的浏览器或者运行环境中才能使用。
    l.push((nums[idx - 1] ?? 1) * l[idx - 1] ?? 1);
    return l
  }, []);
  let r = nums.reduceRight((l, i, idx) => {
    if (i === 0) zeros.push(idx);
    l.push((nums[idx - 1] ?? 1) * l[idx - 1] ?? 1);
    return l
  }, new Array(nums.length));
  return l.map((item, idx) => item * r[idx])
};