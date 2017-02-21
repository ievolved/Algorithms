
// A Vector is a dynamic array that expands in size when it fills up and needs more space, and
//  reduces size when elements are removed and a certain amount of space is wasted.
//
// NOTE: In all cases, if the index is out of bounds, throw an error.
// NOTE: Must implement from scratch, cannot create a direct wrapper around built-in functionality
//
// [ ] implement a Vector class with the following functions
// [ ] .insert() function that takes an index and value to insert
// [ ] .add() function to append a value to the end of the array
// [ ] .remove() function to remove whatever value at index
// [ ] .get() function to return value at index
// [ ] .set() function to set value at index
//
var Vector = function(initialCapacity, maxCapacity) {
  this.storage = ...;
  this.capacity = initialcapacity || 16;  // Default to array size 16
  this.max = maxCapacity || 1 << 24;      // Default to max Vector size 16,777,216
  this.length = 0;
};


Vector.prototype.insert = function(index, value) {
  // ...
};

Vector.prototype.add = function(value) {
  // ...
};

Vector.prototype.remove = function(index) {
  // ...
};

Vector.prototype.get = function(index) {
  // ...
};

Vector.prototype.set = function(index, value) {
  // ...
};

