//Welcome to Gae Phuocs Javascript Learning meetup
//This is week 5 homework
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  var addedTwo = num +2;
  return addedTwo;
}

// To check if you've completed it, uncomment these console.log
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
  var addedS = word + "s";
	return addedS;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  var outputarray = [];
  for (var i=0; i<array.length; i++){
    outputarray.push(callback(array[i]));
  }
  return outputarray;
}

function callback (element ){
  return element *= 2;
  
}
var multiplyByTwo = map([1,2,3,4,5], callback);
console.log(multiplyByTwo);
//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {

}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {

}

//Extension 2
function reduce(array, callback, initialValue) {

}

//Extension 3
function intersection(arrays) {

}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [15, 5]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
