
/** 
 * 罗马数字转整数
 * 知道：字符          数值
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
* 条件1 <= s.length <= 15
* s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 */
/**
 * @param {string} s
 * @return {number}
 */
let checkVal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
const s = "MCMXCIV";
let myRomanToInt = (s) => {
  let arr = s.split('');
  let total = 0;
  arr.forEach(element => {
    total += checkVal[element]
  });
  return total;
};
console.log(myRomanToInt(s));