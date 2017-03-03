
/*
  Previously, you implemented a simple Set.  Sets are fundamentally quite simple, and they
   come up in discrete mathematics a lot during formal studies of computer science.  We can
   do much more with them than just add, remove, and validate whether they contain certain
   values.   It is often useful to test whether values between multiple sets exist, don't
   exist, overlap, or compliment each other.  As an aside, Behind the scenes, SQL data
   queries use Sets and Boolean Algebra heavily for determining what results to return.  We
   can test for the following:

     * A union B: Returns the union of A and B.  A union is the combined sets

       Examples:

        { 1, 3, 5, 7 } union { 2, 4, 6, 8 } => { 1, 2, 3, 4, 5, 6, 7, 8 }
        { 1, 2, 3, 4 } union { 3, 4, 5, 6 } => { 1, 2, 3, 4, 5, 6 }
        { 1, 2 } union { 2, 3 } => { 1, 2, 3 }
        { 1, 9, x, z } union { 1, 2, 3, 4, f, z } => { 1, 2, 3, 4, 9, f, x, z }
        { {x, y}, {a, b} } union { {m, n} } => { {x, y}, {a, b}, {m, n} }
        { "shawn", "tim"  } union { "dan" } => { "shawn", "tim", "dan" }
        etc.

     * A intersect B: Returns the values in B that also exist in A

       Examples:

        { 1, 3, 5, 7 } intersect { 2, 4, 6, 8 } => { }
        { 1, 2, 3, 4 } intersect { 3, 4, 5, 6 } => { 3, 4 }
        { 1, 2 } intersect { 2, 3 } => { 2 }
        { 1, 9, x, z } intersect { 1, 2, 3, 4, f, z } => { 1, z }
        { {x, y}, {a, b} } intersect { {m, n} } => { }
        { {o, p}, {x, y} } intersect { {a, b}, {x, y} } => { {x, y} }
        { "shawn", "tim"  } intersect { "dan" } => { }
        { "shawn", "tim", "dan" } intersect { "tim" } => { "tim" }
        etc.

     * A difference B: Returns the values in B that don't exist in A

       Examples:

        { 1, 3, 5, 7 } diff { 2, 4, 6, 8 } => { 2, 4, 6, 8}
        { 1, 2, 3, 4 } diff { 3, 4, 5, 6 } => { 5, 6 }
        { 1, 2 } diff { 2, 3 } => { 4 }
        { 1, 9, x, z } diff { 1, 2, 3, 4, f, z } => { 2, 3, 4, f }
        { {x, y}, {a, b} } diff { {m, n} } => { {m, n} }
        { {o, p}, {x, y} } diff { {a, b}, {x, y} } => { {a, b} }
        { "shawn", "tim"  } diff { "dan" } => { "dan" }
        { "shawn", "tim", "dan" } diff { "tim" } => { }
        etc.

     * A subset B: Returns true/false if A exists in B

       Examples:

        { 1, 3, 5, 7 } subset { 2, 4, 6, 8 } => false
        { 1, 2, 3, 4 } subset { 3, 4, 5, 6 } => false
        { 1, 2 } subset { 2, 3 } => false
        { 1, 9, x, z } subset { 1, 2, 3, 4, f, z } => false
        { {x, y}, {a, b} } subset { {m, n} } => false
        { {o, p}, {x, y} } subset { {a, b}, {x, y} } => false
        { "shawn", "tim"  } subset { "dan" } => false
        { "shawn", "tim", "dan" } subset { "tim" } => false

        { 3, 4, 5 } subset { 1, 2, 3, 4, 5, 6 } => true
        { 4 } subset { 2, 4, 6, 8 } => true
        { 1, 5, z } subset { 1, 5, 6, z } => true
        { {a, b}, {x, y} } subset { {a, b}, {m, o} } => false
        { {a, b}, {x, y} } subset { {a, b}, {m, o}, {x, y} } => true
        { "shawn" } subset { "shawn", "tim", "dan" } => true
        { } subset { 1, 2, x, y, {x, y}, "shawn"} => true

          NOTE: Empty sets {} are indeed subsets of all sets

        etc.


  Your objective is extend your previous set with the various boolean operations.

    [ ] Implement Set object with static storage
    [ ] .add() function to add values
    [ ] .remove() function to remove values
    [ ] .isMember() function to check whether value exists
    [ ] .union() function to return A union B
    [ ] .intersect() function to return A intersect B
    [ ] .difference() function to return A diff B
    [ ] .subset() function to return Is A subset of B?

  NOTE: Do not use built-in functions to ease the pain
  NOTE: While the above examples may appear to be ordered in some way, the truth is that
          ordering does not matter with sets.  It is enough if the values exist or not.
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


Set.prototype.union = function(B) {
  // ...
};


Set.prototype.intersect = function(B) {
  // ...
};


Set.prototype.difference = function(B) {
  // ...
};


Set.prototype.isSubset = function(B) {
  // ...
};