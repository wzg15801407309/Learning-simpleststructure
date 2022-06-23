/** 
 * 题目：给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
 */
// test-01
// const nums =[1,2,44,5,43,2,44,4,2,90]; 
// const target = 88;

// // test-02
// const nums =[3,3,3,3,3]; 
// const target = 6;
// // test-03
const nums =[-1,-2,-3,-4,-5]; 
const target = -8;

console.log('************* me start ****************')
// 思路：nums.indexOf(target -nums[i])> 0 && i != 前面的值
const myTwoSum = (nums, target) =>{
  if(nums.length<2) return [];
  const len =nums.length;
  for (let i = 0; i < len; i++) {
    const cha = target - nums[i];
    const index = nums.indexOf(cha);
    if( index!==-1 && i!=index){
      return[i,index]
    }
  }
  return [];
}
console.log(myTwoSum(nums,target));

// 优化
const myTwoSum2 = (nums, target) =>{
  if(nums.length<2) return [];
  const len =nums.length;
  for (let i = 0; i < len; i++) {
    const cha = target - nums[i];
    for (let j = i+1; j < len; j++) {
        if(nums[j] == cha){
          return [i,j]
        }
    }
  }
  return [];
}
console.log(myTwoSum2(nums,target));

console.log('************* me end ******************')


console.log('************* normal start ****************')
// 最优 Map  set/has/get  {key:value,key:value,......}
const twoSum = (nums,target)=>{
  if(nums.length<2) return [];
  const len =nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
      const cha = target - nums[i];
      if(map.has(cha)){
        return [map.get(cha),i]
      }
      map.set(nums[i],i);
  }
  return [];
};
console.log(twoSum(nums,target));
console.log('************* normal end ******************')