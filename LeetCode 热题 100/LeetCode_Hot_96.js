/**  LeetCode 热题 100 */
/** 第96题
 * 题目：LRU 缓存
 * 题解：请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 *      实现 LRUCache 类：LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 *      int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 *      如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 *      函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 方案名称：xxxx
 */
class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dummy = new Node(); // 哨兵节点
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    this.keyToNode = new Map();
  }

  getNode(key) {
    if (!this.keyToNode.has(key)) { // 没有这本书
      return null;
    }
    const node = this.keyToNode.get(key); // 有这本书
    this.remove(node); // 把这本书抽出来
    this.pushFront(node); // 放在最上面
    return node;
  }

  get(key) {
    const node = this.getNode(key);
    return node ? node.value : -1;
  }

  put(key, value) {
    let node = this.getNode(key);
    if (node) { // 有这本书
      node.value = value; // 更新 value
      return;
    }
    node = new Node(key, value) // 新书
    this.keyToNode.set(key, node);
    this.pushFront(node); // 放在最上面
    if (this.keyToNode.size > this.capacity) { // 书太多了
      const backNode = this.dummy.prev;
      this.keyToNode.delete(backNode.key);
      this.remove(backNode); // 去掉最后一本书
    }
  }

  // 删除一个节点（抽出一本书）
  remove(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
  }

  // 在链表头添加一个节点（把一本书放在最上面）
  pushFront(x) {
    x.prev = this.dummy;
    x.next = this.dummy.next;
    x.prev.next = x;
    x.next.prev = x;
  }
}