

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
// Ignore that fuction


/*
  Arrays are efficient for random access.  They are also the most common data structure,
   being built into nearly every programming language.  The following exercises should
   serve as a glorious warm-up to the next few topics.

    1. [ ] Fill any array with value, zero if none provided, return original array
    2. [ ] Return the sum of all values in any array
    3. [ ] Return the average value of any array
    4. [ ] Return the median of any array that has both an odd and even number of values
    5. [ ] Return the index the value specified, or null if not found
    6. [ ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
         [ ] Use only a single iteration
    7. [ ] Select a range of values in any array, return the average of the values of the range
    8. [ ] Copy contents of one array to another.  Do not use any built-in functions.
    9. [ ] Swap two elements in an array.  Return the same array passed in.  Do not use any built-in functions.


  NOTE: Satisfy all the tests.  Do not modify or comment of them out.
  NOTE: All predefined arrays and values are also used for the test cases at the end,
         don't modify them or the tests will fail.  If you need something different, you
         can create additional variables to test with.

*/



// 1. [ ] Fill any array with value, zero if none provided, return original array
//
//
//  Sometimes you might want to initialize an array with default values or reset it
//   to a default state.  Most, if not all, modern compilers will automatically
//   initialize an array to a default of all zero values, called "zeroing" an
//   array.
//
//  Below, we get to do this ourselves.  Fill each element of the array with the
//   value provided by `value` or zero if not provided.  Use the array `z` as
//   test input.
//
var z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function fillArray(a, value) {
  value = value || 0;

  // fill it
}





// 2. [ ] Return the sum of all values in any array
//
//
//  A sum is simply the result of all values of an array
//   added together.  Use the array `a` as test input.
//
var a = [1, 2, 3, 4, 5, 6, 7, 8];

function sum(a) {
  // Return sum
}





// 3. [ ] Return the average value of any array
//
//  The average is the sum of all values in the array, divided by the number
//   of elements in the array.  Use the array `a1` as test input.
//
var a1 = [23, 17, 23, 42, 8, 2, 73, 101, 83, 92];

function average(a) {
  // return average
}





//  4. [ ] Return the median of any array that has both an odd and even number of values
//
//   The median is the middle value of a sorted array.  When odd number of values, its the
//    average of the two middle values.  For more information on the median algorithm, you
//    may consult Wikipedia.  Use the arrays `a2, a3, and a0` as test input.
//
//  https://en.wikipedia.org/wiki/Median
//
var a2 = [1,2,4,4,6,7,8,9,12];
var a3 = [4,5,9,10,11,15,22,20,21,21];
var a0 = [10.1, 9.99, 12.32, 17.86, 9.1, 0];

function median(a) {
  // return median
}





// 5. Return the index the value specified, or null if not found
//
//  In this case, we are looking for the index of the value being searched.
//   So a4[0] = "zero".  Thus, "zero" has the index of 0.  Return the index
//   of the value if its found and null if it is not.  Use the array `a4` as
//   test input.
//
var a4 = ["zero", "one", "two", "three", "four", "five"];

function findIndex(a, value) {
  // return index or null
}





// 6. [ ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
//     [ ] Use only a single iteration
//
//  This one is a little trickier than the others.  In this case, we'll looking for the index
//   position of the nth last odd in the list.  So, findNthLastOdd(1) should return 11.  This
//   is because `5` is the 1st odd from the end, and it is at the 11th index position in the
//   array.  Use the array `a5` as test input.
//
var a5 = [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2];

function findNthLastOdd(a, n) {
  // return nth last add
}





// 7. [ ] Select a range of values in any array, return the average of the values of the range
//
//  Given a start index and end index indicating a sub-range within the array, return the
//   average value of that sub-range.  Use the array `a6` as test input.
//
var a6 = [0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1];

function getAverageOfRange(a, start, end) {
  // return average of values selected from a subarray
}





// 8. [ ] Copy contents of one array to another.  Do not use any built-in functions.
//
//  Sometimes we might create a new array, and copy the contents of the old array into
//   it.  Write a function that does this.  Use the arrays `a7` and `b7` as test input.
//
var a7 = [0, 10, 20, 30, 35, 55, 75, 100];
var b7 = [];

function copyArray(source, target) {
  target = target || [];

  // Copy it
}





// 9. [ ] Swap two elements in an array.  Do not use any built-in functions.
//
//  An interviewers favorite.  Swap two elements within an array.  Use the array
//   `a8` as test input.
//
var a8 = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

function swap(a, indexSource, indexTarget) {
  // Swap it
}





var test = testRunner(10);
test(true, function() {
  test(true, function() {
    console.log("fillArray...");
    console.log("  fillArray(z) should be all zeros: " + (fillArray(z).equals([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
    console.log("  fillArray(z, 5) should be all 5's: " + (fillArray(z, 5).equals([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])));
  });

  test(true, function() {
    console.log("sum...");
    console.log("  sum(a) should be 36: " + (sum(a) === 36));
  });

  test(true, function() {
    console.log("average...");
    console.log("  average(a1) should be 46.4: " + (average(a1) === 46.4));
  });

  test(true, function() {
    console.log("median...");
    console.log("  median(a2) should be 6: " + (median(a2) === 6));
    console.log("  median(a3) should be 13: " + (median(a3) === 13));
    console.log("  median(a0) should be 10.045: " + (median(a0.sort(numberSort)) === 10.045));

    function numberSort(a, b) {
      return a - b;
    }
  });

  test(true, function() {
    console.log("findIndex...");
    console.log("  findIndex('three') should be 3: " + (findIndex(a4, "three") === 3));
    console.log("  findIndex('nine') should be null: " + (findIndex(a4, "nine") === null));
  });

  test(true, function() {
    console.log("findNthLastOdd...");
    console.log("  findNthLastOdd(a5, 1) should be 11: " + (findNthLastOdd(a5, 1) === 11));
    console.log("  findNthLastOdd(a5, 2) should be 9: " + (findNthLastOdd(a5, 2) === 9));
    console.log("  findNthLastOdd(a5, 4) should be 1: " + (findNthLastOdd(a5, 4) === 1));
    console.log("  findNthLastOdd(a5, 18) should be null: " + (findNthLastOdd(a5, 18) === null));
  });

  test(true, function() {
    console.log("getAverageOfRange...");
    console.log("  getAverageOfRange(a6, 5, 9) should be 21.4: " + (getAverageOfRange(a6, 5, 9) === 21.4));
  });

  test(true, function() {
    console.log("copyArray...");
    console.log("  copyArray(a7) should return [0, 10, 20, 30, 35, 55, 75, 100]: " + (copyArray(a7, b7).equals(a7)));
    console.log("  b7 should not be empty: " + (b7.length > 0));
    console.log("  b7 should be same as a7: " + (b7.equals(a7)));
  });

  test(true, function() {
    console.log("swap...");
    console.log("  swap(a8, 1, 11) should have swapped: " + (swap(a8, 1, 11).equals([1, 31, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2, 37])));
  });
});



test(true, null);


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

