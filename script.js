// This is what a comment looks like
// only people that look at your code with see this
// the computer will ignore it entierly

// let's do some simple math
var number = 18 + 22;
console.log(number);

//confirm("This is the best website ever!");

//prompt("Why are we here?");

var anotherNumber = 42;
console.log(anotherNumber);

var aString = "This is a string.";
console.log(aString);

// how long is the string?
//console.log(aString.length);

// true or false?
var isThisTrue = aString.length < 6;
console.log(isThisTrue);


// comparisons

//greater than
isThisTrue = aString.length > 6;
console.log(isThisTrue);

// less than
isThisTrue = aString.length < 42;
console.log(isThisTrue);

// less than or equal to
isThisTrue = aString.length <= 42;
console.log(isThisTrue);

// greater than or equal to
isThisTrue = aString.length >= 42;
console.log(isThisTrue);

// completely equal to
isThisTrue = anotherNumber === 42;
console.log("completely equal to", isThisTrue);

// not equal to
isThisTrue = aString !== "This is a string.";
//console.log(isThisTrue);

// basic if statements

if (anotherNumber !== 42) {
  // do this
  console.log('do this');
} else {
  // do that
  console.log('do that');
}

// if you don't want to do anything if the if statement is true, then you can leave the else off

if (anotherNumber == 42) {
  // do this
  console.log('yea!');
}







