
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
  Previously, in L1 you enhanced a partially written vector to resize and maintain an accurate length.
   You may have noticed that the .add(), .insert(), and .remove() functions used built-in functions
   to add and remove data to the storage array, even though you were asked not to use any built-in
   functions yourself.  That is okay, it was done that way to help you focus only on the critical
   details necessary to learn the self-adjusting array concept.

  Your new objective is to re-implement the .add(), .insert(), and .remove() functions from scratch,
   without using any build-in functions.  You can use your previous implementation as reference.
   We've partially implemented a .resize() function.  You'll also change it to either increase the
   storage capacity, or decrease it depending on the operation.

  Complete the following:

   1. [ ] .resize() must double of half the storage as-needed.  When halving, you can use the formula
           (floor(maxCapacity / 2).  IDEA: It might be better to supply an argument that indicates
           the desired storage size, and whether its an add() or remove() operation requesting it.
           Or not.  It's up to you.
      [ ] Don't expand beyond maxCapacity or below minCapacity.

   2. [ ] .add() re-implement with no built-in function calls.  Resize if necessary.
      [ ] .insert() re-implement with no built-in function calls.  Resize if necessary.
      [ ] .remove() re-implement with no built-in function calls.  Resize if necessary.


  BONUS: Only complete this after the others.

   3. [ ] After adding (capacity - 1) items, log the v.storage array.  Also the v.toArray().  Observe
           the differences.
      [ ] Add a couple more items, and log them again and observe.
      [ ] Remove a few until (capacity - 3).  Log them again and observe.
      [ ] Be able to explain why they do not match.
      [ ] Be able to explain why that is okay.

  NOTE: Try to re-use functions when possible, don't repeat yourself (DRY)
  NOTE: Don't worry about edge-cases, error checking, or bounds checking
  NOTE: There shouldn't be any built-in functions in when completed
  NOTE: Satisfy all the tests.  Do not modify or comment of them out

*/

var Vector = function(initialCapacity, maxCapacity) {
  this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
  this.minCapacity = this.capacity;       // Don't reduce below this value
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



var test = testRunner(20);
test(true, function() {
  var v = new Vector();

  test(true, function() {
    console.log("Initialize");
    console.log("  v.length should be 0: " + (v.length === 0));
    console.log("  v.capacity should be 8: " + (v.capacity === 8));
    console.log("  v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));
  });

  test(true, function() {
    console.log("Add 3");
    v.add(0);
    v.add(1);
    v.add(2);
    console.log("  v.length should be 3: " + (v.length === 3));
    console.log("  v.toArray() should be [0, 1, 2]: " + (v.toArray().equals([0, 1, 2])));
  });

  test(false, function() {
    console.log("Add 2 more");
    v.add(3);
    v.add(4);
    console.log("  v.length should be 5: " + (v.length === 5));
    console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));
  });

  test(false, function() {
    console.log("Insert 1 at v[3]");
    v.insert(3, 2.5);
    console.log("  v.length should be 6: " + (v.length === 6));
    console.log("  v.toArray() should be [0, 1, 2, 2.5, 3, 4]: " + (v.toArray().equals([0, 1, 2, 2.5, 3, 4])));
  });

  test(false, function() {
    console.log("Remove v[3]");
    v.remove(3);
    console.log("  v.length should be 5: " + (v.length === 5));
    console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));
  });

  test(false, function() {
    console.log("Set v[2] = 15");
    v.set(2, 15);
    console.log("  v.get(2) should be 15: " + (v.get(2) === 15));
  });

  test(false, function() {
    console.log("Add 3 more");
    v.add(5);
    v.add(6);
    v.add(7);
    console.log("  v.length should be 8: " + (v.length === 8));
    console.log("  v.capacity should be 8: " + (v.capacity === 8));
  });

  test(false, function() {
    console.log("Add 1 more to fill capacity");
    v.add(8);
    console.log("  v.length should be 9: " + (v.length === 9));
    console.log("  v.capacity should be 16: " + (v.capacity === 16));
  });

  test(false, function() {
    console.log("Remove from the end");
    v.remove();
    console.log("  v.toArray() should be [0, 1, 15, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 15, 3, 4, 5, 6, 7])));
  });

  test(false, function() {
    console.log("Remove v[2]");
    v.remove(2);
    console.log("  v.toArray() should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));
  });

  test(false, function() {
    console.log("Remove the first");
    v.remove(0);
    console.log("  v.toArray() should be [1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([1, 3, 4, 5, 6, 7])));
    console.log("  v.length should be 6: " + (v.length === 6));
    console.log("  v.capacity should be 8: " + (v.capacity === 8));
  });

  test(false, function() {
    console.log("Insert one at the beginning");
    v.insert(0, 0);
    console.log("  Insert 0 at v[0] should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));
  });

  test(false, function() {
    console.log("Remove from beginning");
    v.remove(0);
    console.log("  v.remove(0) should be [1, 3, 4, 5, 6, 7]: " + v.toArray().equals([1, 3, 4, 5, 6, 7]));
  });

  v = new Vector();

  test(false, function() {
    console.log("Test inserting <capacity> items leaves the storage size at <capacity>");
    console.log("  Re-Initialize");
    console.log("    v.length should be 0: " + (v.length === 0));
    console.log("    v.capacity should be 8: " + (v.capacity === 8));
    console.log("    v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));
  });

  test(false, function() {
    console.log("  Add 6");
    v.add(0);
    v.add(1);
    v.add(2);
    v.add(3);
    v.add(4);
    v.add(5);
    console.log("    v.length should be 6: " + (v.length === 6));
    console.log("    v.toArray() should be [0, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 1, 2, 3, 4, 5])));
  });

  test(false, function() {
    console.log("  Insert 1");
    v.insert(1, 6);
    console.log("    v.toArray() should be [0, 6, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 6, 1, 2, 3, 4, 5])));
  });

  test(false, function() {
    console.log("  Insert 1 More");
    v.insert(1, 7);
    console.log("    v.length should be 8: " + (v.length === 8));
    console.log("    v.storage.length should be 8: " + (v.storage.length === 8));
    console.log("    v.toArray() should be [0, 7, 6, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 4, 5])));
  });

  test(false, function() {
    console.log("  Insert 1 Beyond Initial Capactity of 8");
    v.insert(6, 8);
    console.log("    v.length should be 9: " + (v.length === 9));
    console.log("    v.storage.length should be 16: " + (v.storage.length === 16));
    console.log("    v.toArray() should be [0, 7, 6, 1, 2, 3, 8, 4, 5]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 8, 4, 5])));
  });

  test(false, function() {
    console.log("Test removing to half capacity reduces storage to half");
    v.remove();
    console.log("  v.remove() should be [0, 7, 6, 1, 2, 3, 8, 4]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 8, 4])));
    console.log("  v.length should be 8: " + (v.length === 8));
    console.log("  v.capacity should be 8: " + (v.capacity === 8));
    console.log("  v.storage.length should be 8: " + (v.storage.length === 8));
  });
});

test(true, null);


function testRunner(totalTests) {
  totalTests -= 1; // remove one for the main test runner
  var count = -1;

  return function(go, test) {
    if (!go) {
      return;
    }

    if (test != null) {
      count += 1;
      test();
    }
    else {
      console.log("");
      console.log("");

      if (count === totalTests) {
        console.log("All tests were executed.");
      }
      else {
        console.log((totalTests - count) + " of " + totalTests + " tests were not executed.");
      }
    }
  }
}
