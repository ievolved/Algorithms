
/*
  The traditional Queue data structure allows you to add and remove items from only one
   end of the storage -- the front.  This is sufficient for many problems that the queue
   can solve.  Sometimes we might need two queues.  This is useful if you might have
   different priority (higher and lower) data for the queue.  This structure is called
   a Double-Ended Queue, or a dequeue (sometimes called a deque).

  The values on each side of the storage grow towards the center and shrink away from it.

  Your objective is to implement a double-ended queue, also called a dequeue without using
   any built-in features.

  Whereas the dequeue() function of a queue is pronounced (de-queue), a dequeue data structure,
   while spelled the same, is pronounced (deck).

    [ ] Complete the implementation of a Deueue class
    [x] .storage property to hold the items on the queue using a standard array
    [ ] .enqueue() function to queue up a value from the beginning
    [ ] .dequeue() function to dequeue a value from the beginning
    [ ] .push() function to queue a value from the end
    [ ] .pop() function to dequeue a value from the end
    [ ] .length property to return the current length

  NOTE: Do not use any built-in features
  NOTE: Do not focus on edge cases or error conditions

 */

var Dequeue = function(initialCapacity) {
  this.storage = new Array(initialCapacity || 16);
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

