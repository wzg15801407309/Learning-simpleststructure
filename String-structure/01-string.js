/** 
 * 题目：编写一个函数，其的作用是将输入的字符串反转过来，输入字符串以字符数组s的修形式给出
 * 条件：不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 
 * Math.floor() :返回小于或等于给定数字的最大整数
 * 
 */
const s = ["h","e","l","l","o"];
const d = ["h","e","l","l","o","p"];
console.log('************* me start ****************')
const  myReverseString = (s)=> {
  if(s.length <=1) return s;
  const length = s.length;
  const len =Math.floor(length/2);
  for (let i = 0; i < len; i++) {
    const temp = s[i];
    s[i] = s[length-i-1];
    s[length-i-1] = temp
  }
  return s;
};
console.log(myReverseString(s));
console.log(myReverseString(d));
console.log('我的思路就是翻转的思路');
console.log('************* me end ******************')
 
 
console.log('************* normal start ****************')
// 双指针
const  reverseString = (s)=> {
  if(s.length <=1) return s;
  let left = 0 ;
  let right = s.length-1
  while(left<right){
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};
console.log(reverseString(s));
console.log(reverseString(d));
console.log('************* normal end ******************')