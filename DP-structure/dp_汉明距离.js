

/** 
 * 汉明距离
 * 汉明距离：指的是两个整数的二进位不同的位数位置数目
 * 
 * 题目：给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 * 
 * 题解：1：整数要转成二进制位数 2:在二进制位比较
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = (x, y) => {
  // 数字转为二进制数据
  x = x.toString(2);
  y = y.toString(2);
  // 找出走长的长度
  let maxLength = Math.max(x.length, y.length);
  // 对不够maxLength 的二进位 添加0
  x = x.padStart(maxLength, 0);
  y = y.padStart(maxLength, 0);
  let ans = 0;
  for (let i = 0; i < maxLength; i++) {
    if (x[i] !== y[i]) ans++;
  }
  return ans;
};


let hammingDistance1 = (x, y) => {
  // x ^ y 位运算  按位异或
  let s = x ^ y, ret = 0;
  while (s != 0) {
    // 按位与(AND) & 都为1 s & 1==1 反之为0；
    ret += s & 1;
    // 左移（Left shift）<<  有符号右移>>
    s >>= 1;
    console.log(s);
  }
  return ret;
};
hammingDistance1(1, 4);
