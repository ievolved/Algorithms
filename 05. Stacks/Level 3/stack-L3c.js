
/*
  Continued from stack-L3b.js

  In the previous challenge, you modified the Double Stack using using a Doubly
   Linked List.  It concluded with a REFACTOR challenge leading you to this file.
   To refactor something is to clean up, or simplify, an implementation using a
   better implementation.  The previous implementation uses multiple similar
   functions and lengths.  We want fewer.

  Your objective is to:

    [ ] Refactor the implementation of a DoubleStack class.  You can start from a copy
          of your implementation from stack-L3b.js
    [ ] .push property that returns the object { front: function()..., back: function() }
          to replace push() and pushFront().  It can be used like: stack.push.front(value),
          or stack.pop.back(), etc.
    [ ] .length property that returns the object { front: _, back: _, size: _} that returns
          the current length of the front stack, back stack, and total size.  It can be
          used like: x = stack.length.size;

  NOTE: Do not use any built-in features

*/

var DoubleStack = function(initialCapacity) {
  this.storage = new DoublyLinkedList();
  this.max = 1 << 5;                                // max = 32
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