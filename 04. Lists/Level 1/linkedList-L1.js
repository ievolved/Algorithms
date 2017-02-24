//
// [ ] Implement LinkedList class
// [ ] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return true/false whether the value exists
//
// [ ] Write a function to return the average of all even values in a Linked List that contains integer
//      data only.
//
var LinkedListNode = function(data, next) {
  this.data = data;
  this.next = next;
};

var LinkedList = function() {
  this.head = new LinkedListNode(null, null);
  this.tail = head;
};



LinkedList.prototype.insert = function(index, value) {
  // ...
};

LinkedList.prototype.remove = function(index) {
  // ...
};

LinkedList.prototype.get = function (index) {
  // ...
};

LinkedList.prototype.set = function(index, value) {
  // ...
};

LinkedList.prototype.find = function(value) {
  // ...
};

LinkedList.prototype.contains = function(value) {
  // ...
};

