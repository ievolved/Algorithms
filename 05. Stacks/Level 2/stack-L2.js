
/*
  The traditional Stack data structure allows you to push and pop items from only one
   end of the storage -- the back.  This is sufficient for many problems that the stack
   can solve.  Sometimes we might need two stacks.  To avoid wasting space we can share
   two stacks with a single storage on the same data structure instance.  This data
   structure is called a double stack.  It is a rarer data structure and one that has
   relatively little written about it, most people would rather use two stacks.  But
   we're not most people.

  The values on each side of the storage grow towards the center and shrink away from it.

  Your objective is to implement a double stack without using any built-in features.  A
   double stack is a data structure that allows you to push and pop values from both
   the front and the back of the stack.

    [ ] Complete the implementation of a DoubleStack class
    [x] .storage property to hold the items on the stack using a standard array
    [ ] .push() function to push a value from the back
    [ ] .pop() function to pop a value from the back
    [ ] .pushFront() function to push a value from the front
    [ ] .popFront() function to pop a value from the front
    [ ] .length property to return the total size used

  NOTE: Do not use any built-in features
  NOTE: Do not focus on edge cases or error conditions

  BONUS:

    [ ] Without changing any code for this, observe what happens when either of the front
          or the back meets in the middle, and continues to grow.  You'll need to write
          some code to trigger the conditions

*/

var DoubleStack = function(initialCapacity) {
  this.storage = new Array(initialCapacity || 16);
  this.length = 0;
  this.lengthFront = 0;
};

DoubleStack.prototype.push = function(value) {
  // ...
};

DoubleStack.prototype.pop = function() {
  // ...
};

DoubleStack.prototype.pushFront = function(value) {
  // ...
};

DoubleStack.prototype.popFront = function() {
  // ...
};