
// [ ] Implement DoublyLinkedList class
// [ ] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
//    [ ] .insertAfter() function to insert data after the node passed in
//    [ ] .insertBefore() function to insert data before the node passed in
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return the number of occurrences of a value in the list.  0 for none.
//
// [ ] Write a function using a doubly linked list to return the index of the nth odd number from the
//      tail of the list.
//
// Extra Credit (for the brave and true)
//
//   [ ] Implement a new Vector class using a Doubly DoublyLinkedList as a backing store
//

var DoublyLinkedListNode = function(data, previous, next) {
  this.data = data;
  this.next = next;
  this.previous = previous;
};

var DoublyLinkedList = function(data) {
  this.head = new DoublyLinkedListNode(data, null, null);
  this.tail = this.head;

  this.length = 1;
  this.average = data;
};



DoublyLinkedList.prototype.insert = function(index, value) {
  // ...
  if (this.isInvalid(index)) {
    return;
  } else if (index === 0) {
    /*
    New > Head
    Set this link up in initializer

    Head > New
    Set this link up second
    */
    let newDoublyLinkedListNode = new DoublyLinkedListNode(value, null, this.head);
    this.head.previous = newDoublyLinkedListNode;
    this.head = newDoublyLinkedListNode;
  } else if (!index) {
    /*
    To insert in the end (index = null)
    New > Tail
    Set this link up in initialization

    Tail > New
    Set this link up second
    */
    let newDoublyLinkedListNode = new DoublyLinkedListNode(value, this.tail, null);
    this.tail.next = newDoublyLinkedListNode;
    this.tail = newDoublyLinkedListNode;
  } else if (index < this.length) {
    /*
    To insert in the middle (index = 1+)
    New > Next
    New > Previous
    Set these links up on initialization.
    
    Next > New
    Previous > New
    Set these links up second

    */
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index);
    let newDoublyLinkedListNode = new DoublyLinkedListNode(value, previousNode, nextNode);
    
    previousNode.next = newDoublyLinkedListNode;
    nextNode.previous = newDoublyLinkedListNode;
  } else {
    console.log("Cosmic Rays Insert");
  }
  this.incrementAndOrAverage('insert', value);
  return this.length;
};

DoublyLinkedList.prototype.insertAfter = function(node, value) {
  // ...
  if (this.isInvalid(index)) {
    return;
  } else if (0 <= index && index < this.length) {
    let previousNode = this.get(index);
    let nextNode = previousNode.next;
    let newDoublyLinkedListNode = new DoublyLinkedListNode(value, previousNode, nextNode);

    previousNode.next = newDoublyLinkedListNode;
    nextNode.previous = newDoublyLinkedListNode;
  } else {
    console.log("Cosmic Rays Insert");
  }
  this.incrementAndOrAverage('insert', value);
  return this.length;
};

DoublyLinkedList.prototype.insertBefore = function(node, value) {
  // ...
  if (this.isInvalid(index)) {
    return;
  } else if (0 <= index && index < this.length) {
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;
    let newDoublyLinkedListNode = new DoublyLinkedListNode(value, previousNode, nextNode);

    previousNode.next = newDoublyLinkedListNode;
    nextNode.previous = newDoublyLinkedListNode;
  } else {
    console.log("Cosmic Rays Insert");
  }
  this.incrementAndOrAverage('insert', value);
  return this.length;
};

DoublyLinkedList.prototype.remove = function(index) {
  // ...
  if (this.isInvalid(index)) {
    return;
  } 

  let removeNode;

  if (index === 0) {
    /*
    Delete Head:
    Delete oldHead's link
    Set Head to newHead
    */
    removeNode = this.head;

    this.head = this.head.next;
    this.head.previous = null;

  } else if (!index) {
    /* 
    Delete Tail:
    Delete oldTail's link
    Set Tail to newTail
    */
    removeNode = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

  } else if (0 <= index && index < this.length) {
    /*
    Remove from Middle:
    Set the one before remove, .next to .next.next
    Set the one after remove, .previous
    */
    removeNode = this.get(index);

    let previousNode = removeNode.previous;
    let nextNode = removeNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

  } else {
    console.log("Cosmic Rays Remove")
    return;
  }

  this.incrementAndOrAverage('remove', removeNode.data)
  return this.length;
};

DoublyLinkedList.prototype.get = function (index) {
  // ...
  if (this.isInvalid(index)) {
    return;
  } else if (0 <= index && index < this.length) {
    /*
    The condition isn't useful, but just in case.
    To find the index:
    1) let currentIndex = this.head
    2) for (let i = 0; i < index; i++)
    3) currentIndex.next();

    */
    let currentIndex = this.head;
    for (let i = 0; i < index; i++) {
      //console.log(currentIndex, i);
      currentIndex = currentIndex.next;
    }
    return currentIndex;
  } else {
    console.log("Cosmic Rays Get");
    return;
  }
};

DoublyLinkedList.prototype.set = function(index, value) {
  // ...
  if (this.isInvalid(index)) {
    return;
  } else if (0 <= index && index < this.length) {
    /*The reason I wanted to do it this way is because I wanted to calculate average each time*/
    let setNode = this.get(index);
    let oldData = setNode.data;
    setNode.data = value;
    this.incrementAndOrAverage('set', value, oldData);
    return this.length;
  } else {
    console.log("Cosmic Rays Set");
    return;
  }
};

DoublyLinkedList.prototype.find = function(value) {
  // ...
  let currentNode = this.head;
  let i = 0;
  while (i < this.length) {
    if (currentNode.data === value) {
      return i;
    }
    currentNode = currentNode.next;
    i++;
  }
  return null;
};

DoublyLinkedList.prototype.contains = function(value) {
  // ...
  return this.find(value) !== null;
  // let currentNode = this.head;
  // try {
  //   while (currentNode.data !== value && currentNode !== null) {
  //     currentNode = currentNode.next;
  //   }
  // } catch (e) {
  //   return false;
  // }

  // //if (currentNode) {
  // return true;
  /*} else {
    console.log("Cosmic Rays Contains")
  }*/
};


DoublyLinkedList.prototype.isInvalid = function(index) {
  return (index < 0 || this.length <= index || index === undefined)
};

/*
data is for single-operation stuff:
The data to add for insert
The data to subtract for remove

oldData is for replacements:
data is the old data
oldData is the data to replace it with
*/
DoublyLinkedList.prototype.incrementAndOrAverage = function(method, data, oldData = 0) {
  let oldTotal = this.average * this.length;

  switch (method) {
    case ('insert'):
      //This is a new length to be used as a new denominator
      this.length++;
    case ('set'):
      //console.log('oldTotal', oldTotal, 'data', data, 'oldData', oldData);
      this.average = (oldTotal + data - oldData)/this.length;
      break;
    case ('remove'):
      this.length--;
      this.average = (oldTotal - data)/this.length;
      break;
  }
}

DoublyLinkedList.prototype.findNthOddValue = function(n) {
  let i = 0;
  let index = this.length - 1;
  let currentNode = this.tail;
  while (i < n && index >= 0) {
    if (currentNode.data % 2 != 0) {
      i++;
      if (i === n) {
        return index;
      }
    }
    index--;
    /*
    For example: Looking for 3rd odd from end
    If the next one is null and you haven't reached 3 yet, you're done. 
    Keep going
    Instead, I let the while loop finish, if it gets to the end, I"m done.
    */
    currentNode = currentNode.previous;
  }
  //I had to readjust the last --. I could have put a conditional, but if I had a million values, I'd run the conditional a million times.

  return null;
}


let ll = new DoublyLinkedList(2);
ll.insert(null, 4);
ll.insert(null, 5);
ll.insert(1, 3);
ll.insert(0, 1);
ll.insert(null, 15);
ll.insert(null, 12);
ll.insert(null, 17);
ll.insert(null, 19);
ll.remove(5);
console.log("ll Should end up with 1, 2, 3, 4, 5, 12, 17, 19");



