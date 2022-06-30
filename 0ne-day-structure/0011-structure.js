/** 
 * 题目：请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 规则：数字 1-9 在每一行只能出现一次。数字 1-9 在每一列只能出现一次。
 * 题意：就是给一个 9*9的二维数组，看
*/
const board =
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
console.log('************* me start ****************')
const isValidSudokuMY = (board) =>{
  // 行的检测
  let row = 0;
  let list = 0;
  const rowset =  new Set();
  const listset =  new Set();
  // 行的处理
  while(row<9){
    // 行处理
    const rowItem= board[row][list];
    if(rowset.has(rowItem)){
      console.log('row=',row,'rowItem=',rowItem);
      return false
    }else{
      rowItem != '.' ? rowset.add(rowItem) :'';
    }
    // 列处理
    const listItem = board[list][row];
    if(listset.has(listItem)){
      console.log('list=',list,'listItem=',listItem);
      return false
    }else{
      listItem != '.' ? listset.add(listItem) :'';
    }
    list++;
    if(list == 9 ){
      row++;
      list = 0;
      rowset.clear();
      listset.clear();
    }
  }
  return true;
}
console.log(isValidSudokuMY(board));
console.log('************* me end ******************')



console.log('************* normal start ****************')
const isValidSudoku = board =>{
  let len = board.length;
  const rowSet = new Set()
  const columnSet = new Set()
  const setList = Array.from({ length: 9 }, () => new Set()); // 块？？
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const m = parseInt(i / 3)
      const n = parseInt(j / 3)
      const idx = m * 3 + n // setList的索引 ??
      if(j === 0){
        rowSet.clear()
        columnSet.clear()
      };
      if(rowSet.has(board[i][j]) || columnSet.has(board[j][j])) return false;
      // 这个是不理解的 
      if(setList[idx].has(board[i][j])) return false;
      board[i][j] !='.'  && setList[idx].add(board[i][j])

      board[i][j] !== '.' && rowSet.add(board[i][j])
      board[j][i] !== '.' && columnSet.add(board[j][i])
      console.log(idx,setList);
    }
  }
  return true;
}

console.log(isValidSudoku(board));
console.log('************* normal end ******************')