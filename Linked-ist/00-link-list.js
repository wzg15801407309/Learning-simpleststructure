/**
 * 实现我的一个链表
 */
/**  单链表的实现   开始 */
// 一个节点
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// 链表
class singleLinkedList{
  constructor(){
    this.head = null;
  }
  // 添加节点
  addNode = (data)=>{
    let node = new Node(data);
    if(this.head){
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
      console.log(current)
    }else{
      this.head = node;
    }
  }
  // 插入节点
  insertNode = (data,target)=>{
    let node = new Node(data);
    let current = this.head;
    while (current.next) {
      if (current.data === target) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }
}
const list = new singleLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(2);
list.addNode(2);
console.dir(list);
/**  单链表的实现   结束 */

/**  双链表的实现   开始 */
/**  双链表的实现   结束 */