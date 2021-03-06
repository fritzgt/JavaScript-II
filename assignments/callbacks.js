// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, num => console.log(num));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastItem = arr.length - 1;
  return cb(arr[lastItem]);
}

last(items, item => console.log(item));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb(sum);
}

sumNums(5, 2, num => console.log(num));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const mult = x * y;
  return cb(mult);
}

multiplyNums(2, 2, num => console.log(num));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const exist = list.includes(item);
  return cb(exist);
}

// contains("yo-yo", items, x => console.log(x));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.

  const unique = array.map(x => x);

  // Pass the duplicate free array to the callback function.

  return cb(unique);

  // Do not mutate the original array.
}
