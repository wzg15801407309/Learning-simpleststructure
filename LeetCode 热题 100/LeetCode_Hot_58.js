/**  LeetCode 热题 100 */
/** 第58题
 * 题目：课程表
 * 题解：在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 
 * 方案名称：拓扑排序
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  // 入度数组
  const inDegree = new Array(numCourses).fill(0);
  // 领接表
  const map = {}
  for (let i = 0; i < prerequisites.length; i++) {
    // 课的初始入度数值
    inDegree[prerequisites[i][0]]++;
    // 如果当前课已经在领接表中了
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      // 当前课不存在邻表中
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }
  // 所有入度为0的课入列
  const quwue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] == 0) quwue.push(i);
  }
  let count = 0;
  while (quwue.length) {
    // 当前选中的课
    const selected = quwue.shift();
    count++;
    // 获取当前课程的后续课程
    const toEnQueue = map[selected];
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue] == 0) {
          quwue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count == numCourses
};