// Objectives:
//  - Describe what a searching algorithm is
//  - Implement linear search on arrays
//  - Implement binary search on sorted arrays
//  - Implement a naive string searching algorithm

// Example of linear search:
//  - This function accepts an array and a value
//  - Loop through the array and check if the current array element is equal to the value
//  - If it is, return the index at which the element is found
//  - If the value is never found, return -1

function linSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    let linear = array[i];
    if (linear == value) {
      return i;
    } else {
      return -1;
    }
  }
} // Time complexity O(n);  as length of array grows so does n

// Binary Search
//  - Binary search is a much faster form of search
//  - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
//  - Binary search only works on sorted arrays
//  - Divide and Conquer

// Example of binary search
//  - This function accepts a sorted array and a value.
//  - Create a left pointer at the start of the array, and a right pointer at the end of the array.
//  - While the left pointer comes before the right pointer:
//      -  Create a pointer in the middle
//      -  If you find the value you want, return the index
//      -  If the value is too small, move the left pointer up
//      -  If the value is too large, move the right pointer down
//  - If you never find the value, return -1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle;
  } else {
    return -1;
  }
}
