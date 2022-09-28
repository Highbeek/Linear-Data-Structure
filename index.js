"use strict";
// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give two Solutions to this problem, using different types of data structures each time.

function findSum(a, b) {
  let sum = [];
  let difference = a.filter((x) => !b.includes(x));
  let diff = b.filter((x) => !a.includes(x));
  sum.push(difference);
  sum.push(diff);
  return sum.flat().reduce((a, b) => a + b);
}
console.log(findSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));
console.log(findSum([12, 13, 6, 10], [13, 10, 16, 15]));
git 
//^2nd solution
const sumUnique = (a, b) => {
  let arr = [...a, ...b];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      continue;
    }
    res += arr[i];
  }
  return res;
};
console.log(sumUnique([3, 1, 7, 9], [2, 4, 1, 9, 3]));
console.log(sumUnique([12, 13, 6, 10], [13, 10, 16, 15]));

// ^Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.

function sumArray(a, b) {
  let sum = [];
  let same = a.filter((x) => b.includes(x));
  let same2 = b.filter((x) => a.includes(x));
  sum.push(same);
  sum.push(same2);
  return sum.flat().reduce((a, b) => a + b);
}
console.log(sumArray([3, 1, 7, 9], [2, 4, 1, 9, 3]));
console.log(sumArray([12, 13, 6, 10], [13, 10, 16, 15]));

const sum2Unique = (a, b) => {
  let arr = [...a, ...b];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      continue;
    }
    res += arr[i];
  }
  return res;
};
console.log(sum2Unique([3, 1, 7, 9], [2, 4, 1, 9, 3]));
console.log(sum2Unique([12, 13, 6, 10], [13, 10, 16, 15]));
