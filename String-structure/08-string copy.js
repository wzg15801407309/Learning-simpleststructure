const { read } = require("fs");
const { endianness } = require("os");

/** 
 * 题目：外观数列
 * 条件：0< n <30
 */
console.log('************* me start ****************')
/**
 * @param {number} n 
 * @return {string}
*/
const n = 5;
const countAndSayMy = (n)=> {
  if(n==1) return "1";
  let result = '';
  while(n>0){
    const len = result.length;
    if(len>1){
      const resArr =[...result];
      let currval = resArr[0];
      let num = 1;
      let temp = ''
      for (let i = 1; i < len; i++) {
        const newval = resArr[i];
        if(newval == currval){
          num++;
        }else{
          temp += num + currval;
          currval = newval;
          num =1;
        }
      }
      result =temp + num+currval;    
    }else{
      result +='1'
    }
    n--;
  }
  return result;
};
console.log(countAndSayMy(n));
console.log('************* me end ******************')

console.log('************* normal start ****************')
// 方法一：遍历生成
const countAndSayMap = (n)=>{
  let str = "1";
  for (let i = 2; i <= n; ++i) {
      const sb = [];
      let start = 0;
      let pos = 0;

      while (pos < str.length) {
          while (pos < str.length && str[pos] === str[start]) {
              pos++;
          }
          sb.push('' + (pos - start) + str[start]);
          start = pos;
      }
      str = sb.join('');
  }
  
  return str;
}
console.log(countAndSayMap(n));
console.log('************* normal end ******************')
