
/** 
 * 颠倒给定的 32 位无符号整数的二进制位。
 * 题意：给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
      输入：n = 00000010100101000001111010011100
      输出：964176192 (00111001011110000010100101000000)
      解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
          因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
* 知道：number.toString(radix)  十进制转2进制
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const number = 987645;
let myReverseBits_01 = function (n) {
    if (n == 0) return 0;
    const bitsN = n.toString(2);
    console.log(bitsN, "二进制");

};