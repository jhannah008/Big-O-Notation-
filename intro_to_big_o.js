//  Objectives
//  - Big O is a system that classifes code and what is faster and more efficent.
//  - More for intervieing and code challenegs (performance matters).
//  - It's important to have a precise vocabulary to talk about how our code performs.
//  - Useful for discussing trade=offs between different approaches.

// When your code slows down or crashes, identifying parts of the code that are
// inefficient can help us find pain points in our application.

// An example: which one is better
// - Faster?
// - Less memory intensive?
// - More Readable?

// Suppose we want to write a function that calculates the sum of all,
// numbers from 1 up to (and including) some numbers n

function addUpTo(n) {
  // O(n)
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToo2(n) {
  // O(1)
  return (n * (n + 1)) / 2;
}

// The Problem with Time
//  - Different machines will record different times
//  - The same machine will record different times (not precise)
//  - For fast algorithms, speed measurements may not be precise enough

// If not time. then What?
// - Let's count the number of simple operations the computer has to perform.

// Counting Operations

// Counting operations for addUpTo : n additions because of the loop & n assignments - meaning n can be any number given how many numbers are in the loop
//  - reguardless of the exact number, the number of operations grows roughly proportionally with n

// Counting operations for addUpToo2 : 1 multiplication 1 addition 1 division = 3 simple operations regardless of the size of n

// Introducing Big O
//  - It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
//  - We won't care about the details, only the trends
//  - When talking about Big O were talking about it's worst case scenario

// Big o Definition
//  - We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
//      - f(n) could be linear (f(n) = n)
//        - Whenever you have 2 loops that arent nested
//      - f(n) could be quadratic (f(n) = n^2)
//        - Whenever you have a nested loop
//      - f(n) could be constant (f(n) = 1)
//      - f(n) could be something entirely different

// linear Big O example

function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    return i;
  }

  for (let j = i + 1; j < n; j++) {
    return j;
  }
} //O(2n) simplify to O(n)

// Quadratic Big O example

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      return i, j;
    }
  }
} // O(n * n) simplfiy to O(n^2)
