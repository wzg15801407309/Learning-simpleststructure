/** 
 * 题目：返回32位无符号的二进位的为‘1’的个数
 */
// 我的方法
const nums  = 0b11111111111111111111111111111101;
const nums1 = 0b00000000000000000000000000011011;
const nums2 = 0b00000000000001111111111111111111;

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


console.log("****************************");


var hammingWeight_01 = function(n) {
  return n.toString(2).replace(/0+/g, '').length;
};
console.log(hammingWeight_01(nums));