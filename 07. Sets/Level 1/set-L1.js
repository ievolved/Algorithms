
/*
  A Set is a data structure that holds any non-repeating values.  The order of values
   isn't usually important though some implementations my require ordering.  The
   interesting thing about Sets is that usually they are used to merely indicate the
   presence of a value rather than to act as a storage container to later retrieve
   the value.  While most data structures hold a { key, value } pair, the key is the
   value in Sets.  Or more precisely, only the key matters.  But a value is needed
   in Javascript primitive arrays/objects.  Simply using a non-zero number or true
   would suffice.  In this example, you may choose whatever you like, such as
   { key = key }, { key = 1 }, { key = true }, etc. but using { key = true } will
   make it easier to make if (true)... else ... statements.

  Sets can be static or dynamic.  As with all static data structures, a static Set is
   fixed-size.  Data in a Set can be anything: numbers, text, objects, etc.  For this
   objective, focus only on numbers or text.

  Your objective is to complete the implementation of static Set that can add, remove,
   and check for the existence of a value.

    [*] Pre-allocate storage as required.  It cannot be altered after creation
    [ ] Maintain length.  Do not allow the number of insert to exceed capacity
    [ ] .add() function to insert an item into the Set if it doesn't already exist
    [ ] .remove() function to remove an item from the Set if it exists
    [ ] .isMember() function to return whether the value exists in the Set

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


Set.prototype.isMember = function(value) {
  // ...
};
