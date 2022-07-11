/** 
 * 题目：给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 */

console.log('************* me start ****************')
/**
 * @param {string} s
 * @return {number}
*/
const s = "leetcode";
const s1 = "loveleetcode";
const myFirstUniqChar = (s) =>{
  const strArr = s.split('');
  const len = strArr.length;
  for (let i = 0; i < len; i++) {
    const value = strArr[i];
    let count = 0;
    for (let j = 0; j < len; j++) {
      if(i!=j  && value != strArr[j]){
        count++;
      }
    }
    if(count == len-1){
      return i;
    }
  }
  return -1;
};
console.log(myFirstUniqChar(s));
console.log(myFirstUniqChar(s1));
console.log('************* me end ******************')


console.log('************* normal start ****************')
//方法一：使用哈希表存储频数
// const firstUniqChar_01 = (s)=> {
//   const frequency = _.countBy(s);  // 这个方法不能用
//   for (const [i, ch] of Array.from(s).entries()) {
//       if (frequency[ch] === 1) {
//           return i;
//       }
//   }
//   return -1;
// };
// console.log(firstUniqChar_01(s));

// 方法二：使用哈希表存储索引
const firstUniqChar_02 = (s)=> {
  const position = new Map();
  const len= s.length;
  //Array.from(s) 把字符串转换为数组 Array.from(‘asdfg’) ==》【‘a’，‘s’，‘d’，‘f’，‘g’】
  for (let [id, value] of Array.from(s).entries()) {
    if (position.has(value)) {
        position.set(value, -1);
    } else {
        position.set(value, id);
    }
  }
  let first = len;
  for (let pos of position.values()) {
    if(pos !=-1 && pos<first){
      first = pos
    }
    
  }
    if (first === len) {
      first = -1;
  }
  return first;
};
console.log(firstUniqChar_02(s));
// 其他奇特的方法
const firstUniqChar = (s)=> {
  for(let i=0;i<s.length;i++){
      if(s.lastIndexOf(s[i])===s.indexOf(s[i])){
           return i
      }
  }
  return -1
};
console.log(firstUniqChar(s1));
console.log('************* normal end ******************')