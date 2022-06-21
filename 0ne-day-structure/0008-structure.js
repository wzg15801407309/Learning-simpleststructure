/** 
 * 题目：给一个整数，加一。然后以数组的形式输出这个整数，且最高位在数组的第一个位置以此类推
 */

 console.log('************* me start ****************')
 console.log('************* me end ******************')
 
 
 console.log('************* normal start ****************')
const plusOne = nums =>{
  const len = nums.length;
  for (let i = len-1; i >=0; i--) {
    nums[i]= (nums[i]+1)%10;
    if(nums[i] !== 0){ // 不等于0，说明最后一位加上1不用向前一位进1；直接返回数组
      return nums
    }
  }
  nums.unshift(1);
  return nums
}
console.log(plusOne([9,9,9,9]));
console.log(plusOne([1,2,3,9]));
console.log(plusOne([1,2,3,8]));
console.log('************* normal end ******************')