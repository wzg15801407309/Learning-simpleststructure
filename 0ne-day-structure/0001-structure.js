/** 每天一题数据结构题 */
/** 第一天
 * 题目：去除有序数据中的重复值 并返回数据
 * 案例：【1,1,2,3,3,4,5,5,6,6,7,7,8,9】
 * 希望返回:[1,2,3,45,,6,7,8,9]
 */

// 定义函数函数
const removeDuplicates = (array)=>{
  const len = array.length;
  if(len<=0) return 0;
  let fast = 1; // 当前数组到达的下标位置
  let slow = 1; // 记录下次需要替换的位置id
  while(fast<len){
    if(array[fast]!=array[fast-1]){
      array[slow] = array[fast];
      ++slow;
    }
    ++fast;
  }
  return array.slice(0,slow);
}
// 调用
const nums = [1,1,2,3,3,4,5,5,6,6,7,7,8,9];
console.log(removeDuplicates(nums));