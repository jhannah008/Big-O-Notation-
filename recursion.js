// Objectives
//  - Define what recursion is and how it can be used
//  - Understand thw two essential components of a recursive function
//  - Visualize the call stack to better debug and understand recursive functions
//  - Use the helper method recursion and pure recursion to solve more difficult problems

// What is Recursion
//  - A process (a function in our case) that calls itself.
//      - JSON.parse / JSON.stringify
//      - document.getElementById
//      - Object Traversal

// How recursive functions work
//  - Invoke the same function with a different input until you reach your base case.
//      - Base Case:
//          - The condition when the recursion ends.
//  - Two essential parts of a recursive function
//      - Base Case
//      - Different input

// Example of Recursion:

function countDown(num) {
  if (num <= 0) {
    console.log("all done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5); // 5, 4, 3, 2, 1, all done!

function sumRange(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumRange(num - 1);
  }
}

// Main recursion problems:

//  - Factorial

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

//  - Power:

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

//  - Product of Array:

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[0] * productOfArray(arr.slice(1));
  }
}

//  - Recursive Range:

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

//  - Fibonacci:

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
