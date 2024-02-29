/**  LeetCode 热题 100 */
/** 第72题
 * 题目：每日温度
 * 题解：给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 方案名称：栈
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const st = [];
  for (let i = 0; i < n; i++) {
    const t = temperatures[i];
    while (st.length && t > temperatures[st[st.length - 1]]) {
      const j = st.pop();
      ans[j] = i - j;
    }
    st.push(i);
  }
  return ans;
};