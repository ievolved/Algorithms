
/*

 Your objective is to implement a double-ended queue, also called a dequeue without using
  any built-in features.

 Whereas the dequeue function of a queue is pronounced (de-queue), a dequeue data structure,
  while spelled the same, is pronounced (deck).

 [ ] Complete the implementation of a Deueue class
 [x] .storage property to hold the items on the queue using a standard array
 [ ] .enqueue() function to queue up a value from the beginning
 [ ] .dequeue() function to dequeue a value from the beginning
 [ ] .push() function to queue a value from the end
 [ ] .pop() function to queue a value from the end
 [ ] .length property to return the current length

 NOTE: Do not use any built-in features
 NOTE: Do not focus on edge cases or error conditions
 NOTE: This will be similar to a Javascript array where .push() and .pop() have the same
         functionality, but .enqueue() equates to Javascript .unshift() and .dequeue()
         equates to .shift().  Different programming languages use various different names
         for the same operations.  Be aware that the vocabulary surrounding double-ended
         queues is inconsistent in the industry.  I chose to name the above functions
         because it allows you to directly tie the operation purpose to the same metaphor
         as the common stack and queue.

 */

var Dequeue = function() {
  this.storage = [];
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

