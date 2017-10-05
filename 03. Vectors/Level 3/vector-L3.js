
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
  Previously in L2, you re-implemented the vector not using any built-in functions, and if you did
   the bonus, got a good sense of how the internal memory representation may not always reflect the
   same view that client using it has.  It's one challenge to understand and write the algorithm
   itself, but we value correctness and consistency as much as we do performance.  If any code attempts
   to access an array index larger than the length an error condition happens.  Most languages will
   return an error of some kind indicating such.  Javascript will just return 'undefined'.  Using
   Javascript, we must check that index is within bounds but other languages will do that for you
   and raise an error if not.  AS AN ASIDE: the C/C++ language don't do range checking for you
   either.  Serious security problems happen that way (Google: buffer overflow exploits) but Javascript
   won't expose any security issues over it like some other languages do.

  One advantage of creating an abstraction over an array isn't just simulating a dynamically resizing
   array, but also we can add safety to an unsafe idea.  It's natural to account for the conditions
   that happen around the first item and ones after.  When thinking about corner cases and edge cases
   we might usually consider the conditions around the first item, last item, and anything between.
   To have any real confidence, we need to go beyond that and check for the cases when the structure
   is empty, or what happens if we attempt to access anything before the first valid position or after
   the last valid position.

  Your objective is to add bounds checking to the various vector operations.  At no point should an
   out of bounds index operation succeed, nor should the vector resize beyond the max value.

  Warm-Up

    [ ] Understand why storage and .toArray() might show different views of the array (see L2 bonus)
    [ ] Declare a javascript array.  Log an index that is less than zero, or more than length.  What
          happens?  Why?

  Objectives

    [ ] Throw an exception when attempting to use a index that is out of any valid range
    [ ] Throw an exception when a resize would result in capacity that exceeds max.  HINT: Be familiar
          with Javascript try...catch...finally /  throw usage

  Bonus

    [ ] .find() function to return the index (or null) of the value provided
    [ ] .contains() function to return true/false whether the item exists.  HINT:  See if you can find
          a clever way to re-use existing functions here.
    [ ] The bounds check should have caught any access to invalid index positions.  Some test cases were
          written to check for that.  Some are missing.  Can you find which ones?  Add them in.

  NOTE: Don't use any built-in functions in your own code.
  NOTE: You may use previous code from L2 as a reference.
  NOTE: Satisfy all the tests.  Do not modify or comment of them out.

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
  this.resize(false, this.length + 1);
  this.storage[this.length++] = value;
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


Vector.prototype.resize = function(isRemoving, desiredLength) {
  // ...
};


Vector.prototype.find = function(value) {
  // ...
};


Vector.prototype.contains = function(value) {
  // ...
};


Vector.prototype.toArray = function() {
  var result = [];

  for (var i=0; i<this.length; i++) {
    result[i] = this.storage[i];
  }

  return result;
};



(function() {
  var run = testRunner(23);
  run(true, function () {
    var v = new Vector();

    run(true, function () {
      console.log("Initialize");
      console.log("  v.length should be 0: " + (v.length === 0));
      console.log("  v.capacity should be 8: " + (v.capacity === 8));
      console.log("  v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));
    });

    run(true, function () {
      console.log("Add 3");
      v.add(0);
      v.add(1);
      v.add(2);
      console.log("  v.length should be 3: " + (v.length === 3));
      console.log("  v.toArray() should be [0, 1, 2]: " + (v.toArray().equals([0, 1, 2])));
    });

    run(true, function () {
      console.log("Add 2 more");
      v.add(3);
      v.add(4);
      console.log("  v.length should be 5: " + (v.length === 5));
      console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));
    });

    run(true, function () {
      console.log("Insert 1 at v[3]");
      v.insert(3, 2.5);
      console.log("  v.length should be 6: " + (v.length === 6));
      console.log("  v.toArray() should be [0, 1, 2, 2.5, 3, 4]: " + (v.toArray().equals([0, 1, 2, 2.5, 3, 4])));
    });

    run(false, function () {
      console.log("Remove v[3]");
      v.remove(3);
      console.log("  v.length should be 5: " + (v.length === 5));
      console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));
    });

    run(false, function () {
      console.log("Set v[2] = 15");
      v.set(2, 15);
      console.log("  v.get(2) should be 15: " + (v.get(2) === 15));
    });

    run(false, function () {
      console.log("Add 3 more");
      v.add(5);
      v.add(6);
      v.add(7);
      console.log("  v.length should be 8: " + (v.length === 8));
      console.log("  v.capacity should be 8: " + (v.capacity === 8));
    });

    run(false, function () {
      console.log("Add 1 more to fill capacity");
      v.add(8);
      console.log("  v.length should be 9: " + (v.length === 9));
      console.log("  v.capacity should be 16: " + (v.capacity === 16));
    });

    run(false, function () {
      console.log("Remove from the end");
      v.remove();
      console.log("  v.toArray() should be [0, 1, 15, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 15, 3, 4, 5, 6, 7])));
    });

    run(false, function () {
      console.log("Remove v[2]");
      v.remove(2);
      console.log("  v.toArray() should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));
    });

    run(false, function () {
      console.log("Remove the first");
      v.remove(0);
      console.log("  v.toArray() should be [1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([1, 3, 4, 5, 6, 7])));
      console.log("  v.length should be 6: " + (v.length === 6));
      console.log("  v.capacity should be 8: " + (v.capacity === 8));
    });

    run(false, function () {
      console.log("Insert one at the beginning");
      v.insert(0, 0);
      console.log("  Insert 0 at v[0] should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));
    });

    run(false, function () {
      console.log("Remove from beginning");
      v.remove(0);
      console.log("  v.remove(0) should be [1, 3, 4, 5, 6, 7]: " + v.toArray().equals([1, 3, 4, 5, 6, 7]));
    });

    v = new Vector();

    run(false, function () {
      console.log("Test inserting <capacity> items leaves the storage size at <capacity>");
      console.log("  Re-Initialize");
      console.log("    v.length should be 0: " + (v.length === 0));
      console.log("    v.capacity should be 8: " + (v.capacity === 8));
      console.log("    v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));
    });

    run(false, function () {
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

    run(false, function () {
      console.log("  Insert 1");
      v.insert(1, 6);
      console.log("    v.toArray() should be [0, 6, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 6, 1, 2, 3, 4, 5])));
    });

    run(false, function () {
      console.log("  Insert 1 More");
      v.insert(1, 7);
      console.log("    v.length should be 8: " + (v.length === 8));
      console.log("    v.storage.length should be 8: " + (v.storage.length === 8));
      console.log("    v.toArray() should be [0, 7, 6, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 4, 5])));
    });

    run(false, function () {
      console.log("  Insert 1 Beyond Initial Capactity of 8");
      v.insert(6, 8);
      console.log("    v.length should be 9: " + (v.length === 9));
      console.log("    v.storage.length should be 16: " + (v.storage.length === 16));
      console.log("    v.toArray() should be [0, 7, 6, 1, 2, 3, 8, 4, 5]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 8, 4, 5])));
    });

    run(false, function () {
      console.log("Test removing to half capacity reduces storage to half");
      v.remove();
      console.log("  v.remove() should be [0, 7, 6, 1, 2, 3, 8, 4]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 8, 4])));
      console.log("  v.length should be 8: " + (v.length === 8));
      console.log("  v.capacity should be 8: " + (v.capacity === 8));
      console.log("  v.storage.length should be 8: " + (v.storage.length === 8));
      console.log(v.storage);
    });

    run(false, function() {
      console.log("Find a value");
      console.log("  v.find(3) should be index 5: " + (v.find(3) === 5));
      console.log("  v.contains(7) should be true: " + (v.contains(7)));
    });


    run(false, function() {
      console.log("Index out of range validations when not empty");
      var test_result;
      try {
        v.insert(-5, -5);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.insert(-5, -5) should cause exception: " + test_result);
        test_result = false;
      }

      try {
        v.insert(20, 20);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.insert(20, 20) should cause exception: " + test_result);
        test_result = false;
      }

      try {
        v.insert(9, 20);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.insert(9, 20) should cause exception: " + test_result);
        test_result = false;
      }


      try {
        v.remove(-5);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.remove(-5) should cause exception: " + test_result);
        test_result = false;
      }

      try {
        v.remove(20);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.remove(20) should cause exception: " + test_result);
        test_result = false;
      }

      try {
        v.remove(6, 20);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.remove(6) should not cause exception: " + !test_result);
        test_result = false;
      }


      try {
        v.set(20, 20);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  set[20] = 20 should cause exception: " + test_result);
        test_result = false;
      }


      try {
        v.get(-1);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  get[-1] should cause exception: " + test_result);
        test_result = false;
      }


      v.remove();
      v.remove();
      v.remove();
      v.remove();
      v.remove();
      v.remove();
      v.remove();
      console.log("  Remove all.  Length should be 0: " + (v.length === 0));
      console.log("  v.toArray() should be []: " + (v.toArray().equals([])));
      try {
        v.insert(0, 0);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  v.insert(0, 0) should cause exception: " + test_result);
        test_result = false;
      }
    });

    run(false, function() {
      console.log("Expanding beyond capacity");
      console.log("  capacity should be 8: " + (v.capacity === 8));

      for (var i = 0; i < 32; i++) {
        v.add(i);
      }

      console.log("  After adding 32, capacity should be 32: " + (v.capacity === 32));
      console.log("  length should be 32: " + (v.length === 32));
      console.log("  storage length should be 32: " + (v.storage.length === 32));
      console.log("  max should be 32: " + (v.max === 32));

      try {
        v.add(32);
      } catch (e) {
        test_result = true;
      }
      finally {
        console.log("  Adding one beyond max should cause capacity exception: " + test_result);
        test_result = false;
      }
    });
  });

  run(true, null);


  function testRunner(totalTests) {
    totalTests -= 1; // remove one for the main test runner
    var count = -1;

    return function (go, test) {
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
})();