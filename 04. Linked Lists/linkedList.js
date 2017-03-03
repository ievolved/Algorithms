
// Ignore this function
//
if(!Array.prototype.equals) {

  // attach the .equals method to Array's prototype to call it on any array
  //
  Array.prototype.equals = function (array) {

    // if the other array is a falsy value, return
    //
    if (!array) {
      return false;
    }

    // compare lengths - can save a lot of time
    //
    if (this.length != array.length) {
      return false;
    }

    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays
      //
      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays
        //
        if (!this[i].equals(array[i])) {
          return false;
        }
      }
      else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        //
        return false;
      }
    }
    return true;
  };

  // Hide method from for-in loops
  //
  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}
//
// Ignore that function


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
  this.head = null;
  this.tail = this.head;
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




function toArray(fromWhichNode) {
  var current = fromWhichNode;
  var result = [];

  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }

  return result;
}



var list = new LinkedList();
var x = null;

console.log("Inserts");
list.insert(null, 0);
console.log("  List should be [0]: " + (toArray(list.head).equals([0])));
list.insert(null, 1);
list.insert(null, 2);
list.insert(null, 3);
console.log("  After inserting 3 more at tail, list should be [0, 1, 2, 3]: " + (toArray(list.head).equals([0, 1, 2, 3])));

list.insert(0, 10);
console.log("  After inserting at head, list should be [10, 0, 1, 2, 3]: " + (toArray(list.head).equals([10, 0, 1, 2, 3])));

list.insert(2, 20);
console.log("  insert(2, 20) should be [10, 0, 20, 1, 2, 3]: " + (toArray(list.head).equals([10, 0, 20, 1, 2, 3])));

list.insert(5, 50);
console.log("  insert(5, 50) [the tail] should be [10, 0, 20, 1, 2, 50, 3]: " + (toArray(list.head).equals([10, 0, 20, 1, 2, 50, 3])));

console.log("Search");
x = list.find(50);
console.log("  find(50) should return { data: 50, next: { data: 3, ... }}: " + (x.data === 50 && x.next.data === 3));
x = list.find(3);
console.log("  find(3) should return { data: 3, ... }: " + (x.data === 3 && x.next === null));
x = list.find(10);
console.log("  find(10) should return { data: 10, ...}: " + (x.data === 10));
x = list.find(100);
console.log("  find(100) should return null: " + (x === null));
console.log("  contains(10) should be true: " + (list.contains(10) !==null));
console.log("  contains(50) should be true: " + (list.contains(50) !== null));
console.log("  contains(3) should be true: " + (list.contains(3) !== null));
console.log("  contains(100) should be false: " + (list.contains(100) === false));

console.log("Get");
console.log("  get(0) should return 10: " + (list.get(0) === 10));
console.log("  get(3) should return 1: " + (list.get(3) === 1));
console.log("  get(6) should return 3: " + (list.get(6) === 3));
console.log("  get(10) should return null: " + (list.get(10) === null));

console.log("Set");
list.set(0, 100);
list.set(3, 103);
list.set(6, 106);
console.log("  get(0) should return 100: " + (list.get(0) === 100));
console.log("  get(3) should return 103: " + (list.get(3) === 103));
console.log("  get(6) should return 106: " + (list.get(6) === 106));

console.log("Remove");
list.remove(6);
console.log("  remove(6) should yield [100, 0, 20, 103, 2, 5]: " + (toArray(list.head).equals([100, 0, 20, 103, 2, 50])));
list.remove(3);
console.log("  remove(3) should yield [100, 0, 20, 2, 50]: " + (toArray(list.head).equals([100, 0, 20, 2, 50])));
list.remove(0);
console.log("  remove(0) should yield [0, 20, 2, 50]: " + (toArray(list.head).equals([0, 20, 2, 50])));
list.remove(1);
console.log("  remove(1) should yield [0, 2, 50]: " + (toArray(list.head).equals([0, 2, 50])));

console.log("Housekeeping");
console.log("  head should be { 0 }: " + (list.head.data === 0));
console.log("  tail should be { 50 }: " + (list.tail.data === 50));