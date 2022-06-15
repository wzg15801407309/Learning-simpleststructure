/** 旋转数组 */
// 题解
/** 给一个数组：[1,2,3,4,5,6,7,8,9,0],给一个k=3，
 * 明白k的意义 k代表的将数组向右轮转 k 个位置，理解就是，把数组的最后k个位置挪到最前面
 * 旋转数组变成：[8,9,0,1,2,3,4,5,6,7]
*/
/** my的思路 
 * 根据k把数组分成两个数组，然后在contact链接在一起就好好了,如下：
*/
// const arrs = [1,2,3,4,5,6,7,8,9,0];
// const rotateMy = (arrs,k)=>{
//   let len = arrs.length;
//   return arrs.slice(len-k).concat(arrs.slice(0,len-k))
// };
// const newArr =  rotateMy(arrs,3);
// console.log(newArr);
/** 我实现了，但是不符合题意，题意是原地改变数组，直接concat应该违反了这个本意吧 */

// 官方的解答
//方法一：使用额外的数组
// const rotate_01 = (arrs,k)=>{
//   let len = arrs.length;
//   const newArr = new Array(len);
//   arrs.forEach((num,i) => {
//     newArr[(i+k)%len] = num;
//   });
//   newArr.forEach((num,i) => {
//     arrs[i] = num
//   });
//   console.log(arrs);
// }
// rotate_01(arrs,3);

// 方法二：我的想法
// const arrs = [1,2,3,4,5,6,7,8,9,0];
// const rotate_02 = (arrs,k)=>{
//   let len = arrs.length;
//   for (let i = 0; i < k; i++) {
//     let temp =  arrs[len-1];
//     for (let j = len-1; j>=0; j--) {
//       arrs[j] = arrs[j-1]
//     }
//     arrs[0] = temp;
//   }
//   console.log(arrs);
// }
// // rotate_02(arrs,2);
// console.log('-----------');