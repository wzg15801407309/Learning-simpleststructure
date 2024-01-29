/**  LeetCode 热题 100 */
/** 第61题
 * 题目：实现 Trie (前缀树)
 * 题解：前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查
 * Trie，又称前缀树或字典树，是一棵有根树。
 * 方案名称：字典树
 */
let Trie = () => {
  this.children = {};
}
Trie.prototype.insert = function (word) {
  let node = this.children;
  for (const ch of word) {
    if (!node[ch]) {
      node[ch] = {};
    }
    node = node[ch];
  }
  node.isEnd = true;
}
Trie.prototype.searchPrefix = function (prefix) {
  let node = this.children;
  for (const ch of prefix) {
    if (!node[ch]) {
      return false;
    }
    node = node[ch];
  }
  return node;

}
Trie.prototype.search = function (word) {
  const node = this.searchPrefix(word);
  return node !== undefined && node.isEnd !== undefined;
}
Trie.prototype.startsWith = function (prefix) {
  return this.searchPrefix(prefix);
}