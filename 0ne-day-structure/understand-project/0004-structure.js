/**
 * 颠倒二进制位
 * 主要是考位运算，
 * 1、位运算：算机对二进制数据进行的运算(+、-、*、/)都是叫位运算，即将符号位共同参与运算的运算。
 * 2、位运算符的符号位：原码、反码和补码。
 *  2.1 原码：最高位为符号位，“0”表示正，“1”表示负，其余位表示数值的大小。
 *  2.2 反码：正数的反码与其原码相同；负数的反码是对其原码逐位取反，但符号位除外。
 *    eg：原码10010= 反码11101 （10010，1为符号码，故为负
 *  2.3 补码表示法规定：正数的补码与其原码相同；负数的补码是在其反码的末位加1
 * 3、常用的位运算符： 
 *    3.1 &(与) ：两个都为1 才为1  
 *    3.2 |(或) ：两个都为0时，才为0
 *    3.4 ^(异或)：两个相同时为 0，不相同为1
 */ 



/** 
 * 必须知道的知识点
 * 1、JavaScript 进行位运算时，是采用的有符号整型，可以使用>>>0 移位操作就转换成无符号数。
 * 2、JavaScript 中定义 
 *      二进制定义   : 使用0b开头  let a = 0b1001  
 *      八进制定义   : 使用0开头   let a = 077  
 *      十六进制定义 : 使用0x开头  let a = 0xaa 
 * 3、JavaScript 中 
 *    十 转 其他 使用 ： 9.toString(2);9.toString(8);9.toString(16);
 *    其他 转 十 使用 ： parseInt(0xaa)==parseInt('aa',16);parseInt(077);
 */
/**
 * 题一：颠倒给定的 32 位无符号整数的二进制位。
 */ 
// 方法一：逐位颠倒

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
      rev |= (n & 1) << (31 - i);
      n >>>= 1;
  }
  return rev >>> 0;
};
const n = 0b111111111111111110000000000000000;
console.log(reverseBits(n));

// 不理解为什么输出的事是0

const  exchangeBits =(num) =>{

  const  RNAGE = 31;

  for (let i = 0; i <= RNAGE; i += 2)
  {
      let evenBit = num & (1 << i); // 取偶数位的值
      let oddBit = num & (1 << i + 1); // 取奇数位的值

      num &= ~(1 << i); // 将偶数位的值置零
      num &= ~(1 << i + 1); // 将奇数位的值置零

      num |= (evenBit << 1); // 将取出的奇数位左移1位
      num |= (oddBit >> 1); // 将取出的偶数位右移1位
  }

  return num;
}
console.log(exchangeBits(n));


//这个没有弄明白

/**
 * 20220617 解决上面的问题
 */