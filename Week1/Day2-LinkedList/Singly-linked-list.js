const  { deleteDuplicates }  = require("./implementations/FilterDuplicateList");
const { getIntersectionNode } = require("./implementations/Intersection-LinkedList");
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /************************************
   *
   * @param {*} node
   *
   * insert at end
   **********************************/
  insert(node) {
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  /*********************************************
   *
   * @param {*} index
   * @param {*} node
   * @returns
   *
   *********************************************/
  insertAt(index, node) {
    let count = 0;
    console.log("going to inserrt : ", node, index, this.head);
    if (index > this.size) {
      console.log(
        `Linked list does not have enough elements to insert at ${index}`
      );
      return false;
    }
    if (!this.head) {
      this.head = node;
      return true;
    }
    let previous, current;
    current = this.head;
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  /**
   *  Deletes a linked list node at a position
   * @param {*} posistion
   * @returns true/false
   */
  deleteNodeAt(index) {
    // if index is more than no of items in LL
    if (index > this.size-1) {
      console.log('No enough Items in List');
      return false;
    }
    // if list is empty
    if (!this.head) {
      console.log("List is empty");
      return false;
    }
    let current = this.head;
    let previous;
    let count = 0;
    // if first node needs to be deleted
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return true;
  }

  getAt(index) {
    
    if (index > this.size - 1) {
      console.log('not enough items');
      return null;
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
  /**
   *  Displays the list
   */
  displayList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  /**
   *
   * @returns size of the linkedlist
   */
  size() {
    console.log(this.size);
    return this.size;
  }
}
[4,1,8,4,5]

const n = new Node(4);
const n2 = new Node(1);
const n3 = new Node(8);
const n4 = new Node(4);
const n5 = new Node(5);
// const n6 = new Node(51000);
const ll = new LinkedList();
ll.insert(n);
ll.insert(n2);
ll.insert(n3);
ll.insert(n4);
ll.insert(n5);
// ll.insert(n6);
// ll.insertAt(4, n5);
// ll.insertAt(5, n5);
// console.log("after insertion : ", ll.size);
// ll.displayList();
// ll.deleteNodeAt(5);
// console.log(ll.getAt(2));
ll.displayList();

// const result = deleteDuplicates(ll.head);
// console.log('result is : ', result);
// result.displayList();

const ll2 = new LinkedList();
const x = new Node(5);
const x2 = new Node(6);
const x3 = new Node(1);
const x4 = new Node(8);
// const x5 = new Node(50);
// const x6 = new Node(900);
ll2.insert(x);
ll2.insert(x2);
ll2.insert(x3);
ll2.insert(x4);
ll2.insert(n3);
// ll2.insert(n6);

const reslt = getIntersectionNode(ll.head, ll2.head)
console.log(reslt);

