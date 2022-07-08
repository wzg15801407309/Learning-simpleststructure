/** 
 * 题目：整数旋转
 * 条件：如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 
 * 
 * 知道的知识点：～x 相当于 ：x 进行按位非操作的结果为 -(x + 1)
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
  // 学习后 添加上的值溢出条件
  const result =Number(arrNew.join(''))
  if(result<Math.pow(-2,31)||result>Math.pow(2,31)-1){
    return 0;
  }else{
    return result;   
  }
};
console.log(myReverse(number));
console.log('~~~自己的想发感觉还是想复杂了~~~~');
console.log('************* me end ******************')


console.log('************* normal start ****************')
// 数学的方式：～x 相当于 ：x 进行按位非操作的结果为 -(x + 1)
const number1 = 9005000;
const  mathReverse = (x)=>{
  let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);//这个还不是特别明白  ～～(x/10) == parseInt(x/10) 前面的效率要好一些
        rev = rev * 10 + digit;
        console.log(x,rev);
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
}
console.log(mathReverse(number1));

console.log('************* normal end ******************')