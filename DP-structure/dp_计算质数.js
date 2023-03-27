
/** 
 * 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
 * 
 * 什么是质数？大于1的自然数中，除了1和它本身以外不再有其他因数的自然数
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 在litcode上超时  
  // // 创建了 长度为n的数组  
  // // 并让 假设所有的都为质数
  // const isPrime = new Array(n).fill(1);
  // console.log(isPrime);
  // let ans = 0;
  // // 明白：i代表的是当前的要判断的数字
  // for (let i = 2; i < n; ++i) {
  //   if (isPrime[i]) {// 明白 if（0）/if（1）
  //     ans += 1;
  //     //  为什么是i*i 
  //     for (let j = i * i; j < n; j += i) {
  //       console.log(i, j);
  //       isPrime[j] = 0;
  //     }
  //   }
  // }
  // return ans;

  let count = n <= 2 ? 0 : 1
  // Int8Array 创建n长度的整数数组
  const isCom = new Int8Array(n)
  for (let i = 3; i < n; i += 2) {
    if (!isCom[i]) {
      count++
      if (i * i < n) {
        for (let j = i; i * j < n; j += 2) {
          isCom[i * j] = 1
        }
      }
    }
  }
  return count
};
console.log(countPrimes(20));
