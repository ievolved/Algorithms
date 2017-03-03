
/*
  A Set is a data structure that can any non-repeating values.  The order of values
   isn't usually important though some implementations my require ordering.  The
   interesting thing about Sets is that usually they are used to merely indicate the
   presence of a value rather than to act as a storage container to later retrieve
   the value.

  Sets can be static or dynamic.  As with all static data structures, a static Set is
   fixed-size.  Data in a Set can be anything: numbers, text, objects, etc.

  Your objective is to complete the implementation of static Set that can add, remove,
   and check for the existence of a value.

    [*] Pre-allocate storage as required.  It cannot be altered after creation
    [ ] Maintain length.  Do not allow the number of insert to exceed capacity
    [ ] .add() function to insert an item into the Set if it doesn't already exist
    [ ] .remove() function to remove an item from the Set if it exists
    [ ] .contains() function to return whether the value exists in the Set

  NOTE: Do not use built-in functions to ease the pain
  NOTE: Do not allow duplicates in any one set.

*/

var Set = function(capacity) {
  this.storage = { };
  this.length = 0;
  this.max = capacity || 10;
};


Set.prototype.add = function(value) {
  // ...
};


Set.prototype.remove = function(value) {
  // ...
};


Set.prototype.contains = function(value) {
  // ...
};
