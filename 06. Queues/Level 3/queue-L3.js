
/*
  The previous challenge, L2, ask you to implement a dequeue.  You may have noticed
   strong similarities between the double stack and dequeue.  About the only notable
   difference is whether you return the newest or oldest item placed in storage.  We
   want to use a dynamic array for the dequeue, also.  Draw from what you learned
   while iterating the double queue and apply it here.

  Your objective is to implement the dequeue using a dynamic array (or vector).

    [ ] Complete the implementation of a Dequeue class
    [ ] .storage property to hold the items on the queue using a dynamic array (or
          vector).
    [ ] .queue() function to queue a value from the back
    [ ] .dequeue() function to dequeue a value from the back
    [ ] .push() function to push a value from the front
    [ ] .pop() function to pop a value from the front
    [ ] .length property to return the total size used

    [ ] The storage cannot resize more than max or less than min.
    [ ] If either end meet in the middle, and continue to grow, a resize must trigger

  BONUS:

    [ ] After completing the above, re-implement using a DoublyLinkedList instead of
          a dynamic array (or specialized vector).  Use the file queue-L3b.js

    [ ] Observe, was it easier?  More difficult?  Be able to explain why
    [ ] What are the differences in resize behavior?  Which do you prefer.  Be able
          to explain why

  NOTE: Do not use any built-in features

*/

var Dequeue = function(initialCapacity) {
  this.storage = []; // change to dynamic array or vector
  this.max = 1 << 5;                          // max = 32;
  this.min = initialCapacity || 8;            // default = 8
  this.length = 0;
  this.lengthFront = 0;
};

Dequeue.prototype.queue = function(value) {
  // ...
};

Dequeue.prototype.dequeue = function() {
  // ...
};

Dequeue.prototype.push = function(value) {
  // ...
};

Dequeue.prototype.pop = function() {
  // ...
};

