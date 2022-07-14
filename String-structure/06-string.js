/** 
 * 题目：字符串转换整数 (atoi)
 */
console.log('************* me start ****************')
// 投机取巧的方式
/**
 * @param {string} s
 * @return {number}
*/
const s = "-n,-12--  ";
const myAtoi_01 = (str)=> {
  const number = parseInt(str, 10);
  if(isNaN(number)) {
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
      return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
      return number;
  }
};
console.log(myAtoi_01(s));
console.log('************* me end ******************')


console.log('************* normal start ****************')
// 官方 题解
/**
 * 
 * @param {string} str 
 * @return {number} 
 * 
 * 如果想要将字符串转换为整数，那么必然会经历这四个有序的阶段：
 * 1、开始转换（start）
 * 2、判断正负（signed）
 * 3、生成数值（in_number）
 * 4、结束转换（end）
*/
const myAtoi= (str)=> {
  // 自动机的实现
  class Automaton{
    constructor(){
      // 执行阶段
      this.state = 'start';
      // 正负符号，默认是正数
      this.sign = 1;
      // 数值 默认是0；
      this.answer = 0;
      /** 
       * 关键点状态和执行阶段的对应表，含义如下：
       * 【执行阶段，【空格，正负，数值，其他】】
       */
      this.map = new Map([
        ['start',['start','signed','in_number','end']],
        ['signed',['end','end','in_number','end']],
        ['in_number',['end','end','in_number','end']],
        ['end',['end','end','end','end']],
      ])
    }
    // 得到状态的索引
    getIndex(char){
        if(char == ' '){
          // 空格判断 
          return 0;
        }else if(char == '-' || char == '+'){
          // 正负判断
          return 1; 
        }else if(typeof Number(char) === 'number' && !isNaN(char)){
          // 数字判断
          return 2;
        }else {
          //其他的情况
          return 3;
        }
      }
    // 字符串转换执行函数
    get(char){
        // 每次传入时都要变更自动机的执行阶段
        this.state = this.map.get(this.state)[this.getIndex(char)];

        if(this.state === 'in_number'){
          //  小技巧：在JS中，对字符串类型进行减法操作，可以将得到一个数值型（Number）的值
          this.answer = this.answer * 10 + (char - 0);
          // 正负判断
          this.answer = this.sign === 1 ? Math.min(this.answer,Math.pow(2,31)-1):Math.min(this.answer,-Math.pow(2,31));
        }else if(this.state == 'signed' ){
          this.sign = char==="+" ? 1:-1;
        }
      }
  }
  // 生成自动机实例
  let automation = new Automaton();
  console.log(automation);
  for (let char of str) {
    automation.get(char);
  }
  // 返回值 整数 = 正负*数值
  return automation.sign * automation.answer;
};
console.log(myAtoi(s));
console.log('************* normal end ******************')