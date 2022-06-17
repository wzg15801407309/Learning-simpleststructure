/** 
 * 题目：只出现一次的数字
 */
const array =[1,2,2,4,4,3,3];
// my 方法 has
const singleNumber = num =>{
  let setArr = new Set();
  num.forEach(item => {
    if(!setArr.has(item)){
      setArr.add(item);
    }else{
      setArr.delete(item);
    }
  });
console.log(setArr);

}
singleNumber(array);
// 使用了额外的空间不满足题意；

console.log('_______________');
// 使用异或来做
// 这个方法只适用与在一个数组中找出有且只有一个不重复的数组
const singleNumber_normal = nums =>{
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  console.log(res);
}

singleNumber_normal(array);