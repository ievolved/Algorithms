
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

// Previously, in L1 you enhanced a partially written vector to resize and maintain an accurate length.
//  You may have noticed that the .add(), .insert(), and .remove() functions used built-in functions
//  to add and remove data to the storage array, even though you were asked not to use any built-in
//  functions yourself.  That is okay, it was done that way to help you focus only on the critical
//  details necessary to learn the self-adjusting array concept.
//
// Your new objective is to re-implement the .add(), .insert(), and .remove() functions from scratch,
//  without using any build-in functions.  You can use your previous implementation as reference.
//  We've partially implemented a .resize() function.  You'll also change it to either increase the
//  storage capacity, or decrease it depending on the operation.
//
//   [ ] .resize() function to expand/reduce when needed.  HINT: Use a desired length to decide whether
//         to increase or decrease capacity.  Either double, or halve, as-needed.
//   [ ] .add() re-implement with no built-in function calls.  Resize if necessary.
//   [ ] .insert() re-implement with no built-in function calls.  Resize if necessary.
//   [ ] .remove() re-implement with no built-in function calls.  Resize if necessary.
//
// NOTE: Don't worry about edge-cases, error checking, or bounds checking
// NOTE: There shouldn't be any built-in functions in when completed
//
// BONUS: Only complete this after the others.
//
//   [ ] After adding (capacity - 1) items, log the v.storage array.  Also the v.toArray().  Observe
//         the differences.
//   [ ] Add a couple more items, and log them again and observe.
//   [ ] Remove a few until (capacity - 3).  Log them again and observe.
//   [ ] Explain why they do not match.
//      [ ] Explain why that is okay.
//

var Vector = function(initialCapacity, maxCapacity) {
  this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
  this.max = maxCapacity || 1 << 5;       // Default max vector size to 32
  this.length = 0;

  this.storage = new Array(this.capacity);
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
  return this.storage[index];
};


Vector.prototype.set = function(index, value) {
  this.storage[index] = value;
};


Vector.prototype.resize = function() {
  this.capacity *= 2;
  var tempStorage = new Array(this.capacity);

  for (var i=0; i<this.storage.length; i++) {
    tempStorage[i] = this.storage[i];
  }

  this.storage = tempStorage;
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
console.log("  v.capacity should be 16: " + (v.capacity === 16));

console.log("Remove all but 2");
v.remove();
v.remove();
v.remove();
v.remove();
console.log("  v.toArray() should be [1, 3]: " + (v.toArray().equals([1, 3])));
console.log("  v.length should be 2: " + (v.length === 2));
console.log("  v.capacity should be 8: " + (v.capacity === 8));
