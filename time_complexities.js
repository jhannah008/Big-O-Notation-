// Simplifying Big O Expressions
//  - When determining the time complexity of an algorithm, there are some helpful rule of thumb for big O expressions.
//  - How fast something runs.
//  - These rules of thumb are consequences of the definition of Big O notation.
//      - Constants don't matter
//          - O(2n) = O(n)
//          - O(500) = O(1)
//          - O(13n^2) = O(n^2)

//      - Smaller terms don't matter
//          - O(n + 10) = O(n)
//          - O(1000n + 50) = O(n)
//          - O(n^2 + 5n + 8) = O(n^2)
//          - O(n^2 + 5n^3) = O(n^3)
//  - Arithmetic operations are constant
//  - Variable assignments is constant
//  - Accessing elements in an array (by index) or object (by key) is constant
//  - In a loop, the complexity  is the length of the loop times the complexity of whatever happens inside of the loop.

// Some Examples

function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
} //Time complexity is simplified to O(n)

function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
} //Time complexity is simplified to O(1)
