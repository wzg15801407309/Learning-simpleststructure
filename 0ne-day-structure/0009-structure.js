/** 
 * 题目：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 条件：必须在不复制数组的情况下原地对数组进行操作。
 */
const nums = [0,0,1,1,0];
console.log('************* me start ****************')
const moveZero = nums =>{
  const len = nums.length;
  if (len<=1) return nums;
  let res = 0;
  for (let i = 0; i <len ; i++) {
    if(nums[i] != 0){
      nums[res] = nums[i];
      nums[i] = 0;
      res++;
    }
  }
  return nums;
}
console.log(moveZero(nums));
console.log('************* me end ******************')


console.log('************* normal start ****************')
// 双指针
const numsN = [0,2,1,1,0,2,3];
const moveZerNormal = nums =>{

  let left = 0;
  let right = 0;
  const len = nums.length;
  while(right<len){
    if(nums[right]!=0){
      nums[left++] = nums[right];
    }
    right++;
  }
  while(left<len){
    nums[left++] = 0;
  }
 return nums
}
console.log(moveZerNormal(numsN));

console.log('************* normal end ******************')