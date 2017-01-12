

var HashTable = function() {
  this._storage = ...;
  this._count = 0;
  this._limit = 8;
};


// Algorithm of an insert
//
//  Compute numeric hash of the key into index
//  Attempt to get bucket based on index
//  was it previously created?
//    No?  Create one
//    yes?  Use it
//  Any conflicting values in the bucket? based on key
//    No?  Insert value
//    Yes?  Override value
//  Resize the storage if necessary (advanced)
//
HashTable.prototype.insert = function(key, value) {
  //create an index for our storage location by passing it through our hashing function
  //
  var index = this.hashFunc(key, this._limit);

  //retrieve the bucket at this particular index in our storage, if one exists
  //  [[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
  //
  var bucket = this._storage[index]

    //does a bucket exist or do we get undefined when trying to retrieve said index?
    //
    ...

    //now iterate through our bucket to see if there are any conflicting
    //key value pairs within our bucket. If there are any, override them.
    //
    ...
};


// Algorithm of a remove
//
//  Compute numeric hash of the key into index
//  does numeric key exist in bucket? based on index
//    No?  Do nothing
//  does value exist in values? based on key
//    No?  Do nothing
//    Yes?  remove it, return old value
//
HashTable.prototype.remove = function(key) {
  var index = this.hashFunc(key, this._limit);

  ...
};


// Algorithm of a retrieve
//
//  Compute numeric hash of the key into index
//  does numeric key exist in bucket? based on index
//    No?  Do nothing
//  does value exist in values? based on key
//    No?  Do nothing
//    Yes?  return value
//
HashTable.prototype.retrieve = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];

  ...
};


HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = [];

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

HashTable.prototype.retrieveAll = function() {
  console.log(this._storage);
  //console.log(this._limit);
};

/******************************TESTS*******************************/

var hashT = new HashTable();

hashT.insert('Alex Hawkins', '510-599-1930');
//hashT.retrieve();
//[ , , , [ [ 'Alex Hawkins', '510-599-1930' ] ] ]
hashT.insert('Boo Radley', '520-589-1970');
//hashT.retrieve();
//[ , [ [ 'Boo Radley', '520-589-1970' ] ], , [ [ 'Alex Hawkins', '510-599-1930' ] ] ]
hashT.insert('Vance Carter', '120-589-1970').insert('Rick Mires', '520-589-1970').insert('Tom Bradey', '520-589-1970').insert('Biff Tanin', '520-589-1970');
//hashT.retrieveAll();
/*
 [ ,
 [ [ 'Boo Radley', '520-589-1970' ],
 [ 'Tom Bradey', '520-589-1970' ] ],
 ,
 [ [ 'Alex Hawkins', '510-599-1930' ],
 [ 'Rick Mires', '520-589-1970' ] ],
 ,
 ,
 [ [ 'Biff Tanin', '520-589-1970' ] ] ]
 */

//overide example (Phone Number Change)
//
hashT.insert('Rick Mires', '650-589-1970').insert('Tom Bradey', '818-589-1970').insert('Biff Tanin', '987-589-1970');
//hashT.retrieveAll();

/*
 [ ,
 [ [ 'Boo Radley', '520-589-1970' ],
 [ 'Tom Bradey', '818-589-1970' ] ],
 ,
 [ [ 'Alex Hawkins', '510-599-1930' ],
 [ 'Rick Mires', '650-589-1970' ] ],
 ,
 ,
 [ [ 'Biff Tanin', '987-589-1970' ] ] ]

 */

hashT.remove('Rick Mires');
hashT.remove('Tom Bradey');
//hashT.retrieveAll();

/*
 [ ,
 [ [ 'Boo Radley', '520-589-1970' ] ],
 ,
 [ [ 'Alex Hawkins', '510-599-1930' ] ],
 ,
 ,
 [ [ 'Biff Tanin', '987-589-1970' ] ] ]


 */

hashT.insert('Dick Mires', '650-589-1970').insert('Lam James', '818-589-1970').insert('Ricky Ticky Tavi', '987-589-1970');
hashT.retrieveAll();


/* NOTICE HOW HASH TABLE HAS NOW DOUBLED IN SIZE UPON REACHING 75% CAPACITY ie 6/8. It is now size 16.
 [,
 ,
 [ [ 'Vance Carter', '120-589-1970' ] ],
 [ [ 'Alex Hawkins', '510-599-1930' ],
 [ 'Dick Mires', '650-589-1970' ],
 [ 'Lam James', '818-589-1970' ] ],
 ,
 ,
 ,
 ,
 ,
 [ [ 'Boo Radley', '520-589-1970' ],
 [ 'Ricky Ticky Tavi', '987-589-1970' ] ],
 ,
 ,
 ,
 ,
 [ [ 'Biff Tanin', '987-589-1970' ] ] ]




 */
console.log(hashT.retrieve('Lam James'));  //818-589-1970
console.log(hashT.retrieve('Dick Mires')); //650-589-1970
console.log(hashT.retrieve('Ricky Ticky Tavi')); //987-589-1970
console.log(hashT.retrieve('Alex Hawkins')); //510-599-1930
console.log(hashT.retrieve('Lebron James')); //null
