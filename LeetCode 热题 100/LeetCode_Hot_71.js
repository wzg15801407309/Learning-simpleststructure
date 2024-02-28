/**  LeetCode 热题 100 */
/** 第71题
 * 题目：字符串解码
 * 题解：给定一个经过编码的字符串，返回它解码后的字符串。
 * 码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *          你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 方案名称：栈
 */
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  // 存倍数的栈
  let numStack = [];
  // 存待拼接的str的栈
  let strStack = [];
  // 倍数
  let num = 0;
  // 字符串
  let result = '';
  for (const char of s) {
    if (!isNaN(char)) {// 如果是数字
      num = num * 10 + Number(char);
    } else if (char === '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (char === ']') {
      let reapeatTimes = numStack.pop();
      result = strStack.pop() + result.repeat(reapeatTimes);
    } else {
      result += char;
    }
  }
  return result;
};