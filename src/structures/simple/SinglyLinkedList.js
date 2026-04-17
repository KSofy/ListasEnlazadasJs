const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  countOccurrences(value) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        count++;
      }
      current = current.next;
    }

    return count;
  }

  clean() {
    let removed = 0;
    let current = this.head;

    while (current !== null) {
        let next = current.next;
        current.next = null; 
        current = next;
        removed++;
    }

    this.head = null;
    this.tail = null;
    this._size = 0;

    return removed;
}

  reverseInPlace() {
    let previous = null;
    let current = this.head;
    let next = null;

  
    while (current !== null) {
      next = current.next;   
      current.next = previous;  
      previous = current;         
      current = next;             
    }

    
    this.tail = this.head;
    this.head = previous;
  }

  removeDuplicates() {
    let removedCount = 0; 
    let current = this.head;

    while (current !== null) {
      let runner = current;
      while (runner.next !== null) {
        
        if (current.value === runner.next.value) {
          runner.next = runner.next.next;
          this._size--;
          removedCount++; 
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
    return removedCount; 
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
