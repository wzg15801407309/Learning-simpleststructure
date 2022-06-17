/** 
 * 题目：返回32位无符号的二进位的为‘1’的个数
 */
// 我的方法
const nums  = 11111111111111111111111111111101;
const nums1 = 00000000000000000000000000011011;
const nums2 = 00000000000001111111111111111111;

const hammingWeight = (n)=> {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
      if ((n & (1 << i)) !== 0) {
          ret++;
      }
  }
  return ret;
};
console.log(hammingWeight(nums1))
console.log(hammingWeight(nums))
console.log(hammingWeight(nums2))

// 问题就是：为什么nums的结果为0，且nums1往上添加的时候也会有问题

console.log("****************************");


var hammingWeight_01 = function(n) {
  console.log(n.toString(2).replace(/0+/g, ''))
  return n.toString(2).replace(/0+/g, '').length;
};
console.log(hammingWeight_01(nums)); // 这个也是32