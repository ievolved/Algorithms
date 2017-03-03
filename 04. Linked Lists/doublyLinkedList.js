
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
//   [ ] Implement a new Vector class using a Doubly LinkedList as a backing store
//

var DoublyLinkedListNode = function(data, next, previous) {
  this.data = data;
  this.next = next;
  this.previous = previous;
};

var DoublyLinkedList = function() {
  this.head = new DoublyLinkedListNode(null, null, null);
  this.tail = head;
};



DoublyLinkedList.prototype.insert = function(index, value) {
  // ...
};

DoublyLinkedList.prototype.insertAfter = function(node, value) {
  // ...
};

DoublyLinkedList.prototype.insertBefore = function(node, value) {
  // ...
};

DoublyLinkedList.prototype.remove = function(index) {
  // ...
};

DoublyLinkedList.prototype.get = function (index) {
  // ...
};

DoublyLinkedList.prototype.set = function(index, value) {
  // ...
};

DoublyLinkedList.prototype.find = function(value) {
  // ...
};

DoublyLinkedList.prototype.contains = function(value) {
  // ...
};



var list = new DoublyLinkedList();

console.log("Inserts First & Before");
var n0 = list.insert(0, 0);
console.log("  insert(0, 0) should yield [0]: " + (toArray(list.head).equals([0])));
console.log("  head should be n0: " + (n0 === list.head));
console.log("  tail should be n0: " + (n0 === list.tail));
var n00 = list.insert(0, -1);
console.log("  insert(0, -1) should yield [-1, 0]: " + (toArray(list.head).equals([-1, 0])));
console.log("  head should be -1: " + (list.head.data === -1));
console.log("  tail should be 0: " + (list.tail.data === 0));
var n1 = list.insert(1, 1);
console.log("  insert(1, 1) should yield [-1, 1, 0]: " + (toArray(list.head).equals([-1, 1, 0])));
var n2 = list.insert(2, 2);
console.log("  insert(2, 2) should yield [-1, 1, 2, 0]: " + toArray(list.head).equals([-1, 1, 2, 0]));
console.log("  tail should be 0: " + (list.tail.data === 0));
var n4 = list.insert(null, 4);
console.log("  insert(null, 4) should yield [-1, 1, 2, 4, 0]:" + (toArray(list.head).equals([-1, 1, 2, 4, 0])));
console.log("  tail should be 4: " + (list.tail.data === 0));

console.log("Inserts After");
var n5 = list.insertAfter(n2, 10);
console.log("  insertAfter([2], 10) should yield [-1, 1, 2, 10, 4, 0]: " + (toArray(list.head).equals([-1, 1, 2, 10, 4, 0])));
var n6 = list.insertAfter(list.head, 6);
console.log("  insertAfter([head], 6) should yield [-1, 6, 1, 2, 10, 4, 0]: " + (toArray(list.head).equals([-1, 6, 1, 2, 10, 4, 0])));
var n7 = list.insertAfter(list.tail, 7);
console.log("  insertAfter([tail], 7) should yield [-1, 6, 1, 2, 10, 4, 0, 7]:" + (toArray(list.head).equals([-1, 6, 1, 2, 10, 4, 0, 7])));

console.log("Inserts Before");
var n7 = list.insertBefore(list.head, 11);
console.log("  insertBefore([head], 11) should yield [11, -1, 6, 1, 2, 10, 4, 0, 7]: " + (toArray(list.head).equals([11, -1, 6, 1, 2, 10, 4, 0, 7])));
var n8 = list.insertBefore(list.tail, 12);
console.log("  insertBefore([tail], 12) should yield [11, -1, 6, 1, 2, 10, 4, 0, 12, 7]: " + (toArray(list.head).equals([11, -1, 6, 1, 2, 10, 4, 0, 12, 7])));
var n9 = list.insertBefore(n5, 55);
console.log("  insertBefore([5], 55) should yield [11, -1, 6, 1, 2, 55, 10, 4, 0, 12, 7]: " + (toArray(list.head).equals([11, -1, 6, 1, 2, 55, 10, 4, 0, 12, 7])));
console.log("  head should be 11: " + (list.head.data === 11));
console.log("  tail should be 7: " + (list.tail.data === 7));

console.log("Finds & Contains");
console.log("  list.find(12) returns 12: " + (list.find(12).data === 12));
console.log("  list.find(0) returns 11: " + (list.find(11).data === 11));
console.log("  list.find(7) returns 7:" + (list.find(7).data === 7));
console.log("  list.find(100) returns null: " + (list.find(100) === null));
console.log("  list.contains(11) is true: " + (list.contains(11) === true));
console.log("  list.contains(55) is true: " + (list.contains(55) === true));
console.log("  list.contains(7) is true: " + (list.contains(7) === true));
console.log("  list.contains(221) is false: " + (list.contains(221) === false));

console.log("Removes");
var r1 = list.remove(0);
console.log("  remove(0) should yield [-1, 6, 1, 2, 55, 10, 4, 0, 12, 7]: " + (toArray(list.head).equals([-1, 6, 1, 2, 55, 10, 4, 0, 12, 7])));
var r2 = list.remove(9);
console.log("  remove(9) should yield [-1, 6, 1, 2, 55, 10, 4, 0, 12]: " + (toArray(list.head).equals([-1, 6, 1, 2, 55, 10, 4, 0, 12])));
var r3 = list.remove(4);
console.log("  remove(4) should yield [-1, 6, 1, 2, 10, 4, 0, 12]: " + (toArray(list.head).equals([-1, 6, 1, 2, 10, 4, 0, 12])));

console.log("Gets & Sets");
for (var i=0; i<8; i++) {
  list.set(i, i);
}
console.log("  set(0 ... 7) should yield [0, 1, 2, 3, 4, 5, 6, 7]: " + (toArray(list.head).equals([0, 1, 2, 3, 4, 5, 6, 7])));
var a = [];
for (var i=7; i>=0; i--) {
  a.push(list.get(i));
}
console.log("  get(7 ... 0) should yield [7, 6, 5, 4, 3, 2, 1, 0]: " + (a.equals([7, 6, 5, 4, 3, 2, 1, 0])));

console.log(toArray(list.head));
