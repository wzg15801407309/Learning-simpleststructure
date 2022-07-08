/** 
 * 题目：整数旋转
 * 条件：如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 
 */

console.log('************* me start ****************')
const number = 456789;
/**
 * @param {number} x
 * @return {number}
 */
const myReverse = (x) =>{
  const arrNew = x.toString().split('');
  const len = arrNew.length;
  for (let i = 0; i < Math.floor(len/2); i++) {
    const temp = arrNew[i];
    arrNew[i] = arrNew[len-i-1];
    arrNew[len-i-1] = temp;
  }
  return Number(arrNew.join(''));
};
console.log(myReverse(number));
console.log('~~~自己的想发感觉还是想复杂了~~~~');
console.log('************* me end ******************')


console.log('************* normal start ****************')
console.log('************* normal end ******************')