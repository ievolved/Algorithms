
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


/*
  A vector is a dynamic array that adjusts size when a certain threshold is met when adding or removing
   items.  It is essentially a _collection_ that behaves somewhat like an array.  There are some
   some differences.  Arrays always allocate enough memory to hold enough elements to fill the full
   capacity.  Then allow random access anywhere within that range at any time.

  Collections are different.  They are not technically an array though they may or may not use one as a
   storage mechanism behind the scenes.  They allow you to append new items to the end, insert new items
   anywhere near items that have already been inserted, and allow random access anywhere within that
   range.

  Collections are dynamic arrays and go by different names and may have slightly different nuanced
   behaviors between them but they are essentially the same idea.

    Dynamic Array    // A self-adjusting array
    Vector           // Not to be confused with a 2D/3D graphics vector
    List             // Not to be confused with a LinkedList
    Set
    Multiset
    Collection
    ArrayList

  The code in this file is a partially implemented vector.  Your objective is to implement the resize
   functionality.  When the vector length has reached capacity, it must double in size.  Complete the
   following tasks:

    [ ] .resize() function to expand when needed
    [ ] .add() function to expand when needed
    [ ] .insert() function to expand when needed

    [ ] .add(), .insert(), .remove() must adjust the length appropriately

  NOTE: Don't worry about edge-cases, error checking, or bounds checking
  NOTE: Some built-in functions are already used.  Do not use any in the code you add
  NOTE: Satisfy all the tests.  Do not modify or comment of them out.

*/

var Vector = function(initialCapacity, maxCapacity) {
  this.storage = [];
  this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
  this.max = maxCapacity || 1 << 5;       // Default max vector size to 32
  this.length = 0;
};



Vector.prototype.insert = function(index, value) {
  this.storage.splice(index, 0, value);
};


Vector.prototype.add = function(value) {
  this.storage[this.length++] = value;
};


Vector.prototype.remove = function(index) {
  if (index === undefined || index === null) {
    delete this.storage[this.length];
  }
  else {
    this.storage.splice(index, 1);
  }
};


Vector.prototype.get = function(index) {
  return this.storage[index];
};


Vector.prototype.set = function(index, value) {
  this.storage[index] = value;
};


Vector.prototype.resize = function() {
  // ...
};


Vector.prototype.toArray = function() {
  var result = [];

  for (var i=0; i<this.length; i++) {
    result[i] = this.storage[i];
  }

  return result;
};



var v = new Vector();

console.log("Initialize");
console.log("  v.length should be 0: " + (v.length === 0));
console.log("  v.capacity should be 8: " + (v.capacity === 8));
console.log("  v.max should be 32: " + (v.max === 32));
console.log("  v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));

console.log("Add 3");
v.add(0);
v.add(1);
v.add(2);
console.log("  v.length should be 3: " + (v.length === 3));
console.log("  v.toArray() should be [0, 1, 2]: " + (v.toArray().equals([0, 1, 2])));

console.log("Add 2 more");
v.add(3);
v.add(4);
console.log("  v.length should be 5: " + (v.length === 5));
console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));

console.log("Insert 1 at v[3]");
v.insert(3, 2.5);
console.log("  v.length should be 6: " + (v.length === 6));
console.log("  v.toArray() should be [0, 1, 2, 2.5, 3, 4]: " + (v.toArray().equals([0, 1, 2, 2.5, 3, 4])));

console.log("Remove v[3]");
v.remove(3);
console.log("  v.length should be 5: " + (v.length === 5));
console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));

console.log("Set v[2] = 15");
v.set(2, 15);
console.log("  v.get(2) should be 15: " + (v.get(2) === 15));

console.log("Add 4 more");
v.add(5);
v.add(6);
v.add(7);
v.add(8);
console.log("  v.length should be 9: " + (v.length === 9));
console.log("  v.capacity should be 16: " + (v.capacity === 16));

console.log("Remove from the end");
v.remove();
console.log("  v.toArray() should be [0, 1, 15, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 15, 3, 4, 5, 6, 7])));

console.log("Remove v[2]");
v.remove(2);
console.log("  v.toArray() should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));

console.log("Remove the first");
v.remove(0);
console.log("  v.toArray() should be [1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([1, 3, 4, 5, 6, 7])));
console.log("  v.length should be 6: " + (v.length === 6));
console.log("  v.capacity should be 8: " + (v.capacity === 16));

console.log("Insert one at the beginning");
v.insert(0, 0);
console.log("  Insert 0 at v[0] should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));

console.log("Remove from beginning");
v.remove(0);
console.log("  v.remove(0) should be [1, 3, 4, 5, 6, 7]: " + v.toArray().equals([1, 3, 4, 5, 6, 7]));



