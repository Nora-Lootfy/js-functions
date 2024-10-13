const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 18, 22, 15, 27, 0, 9];

console.log(largestNumber(numbers));

function largestNumber(numbers) {
  // sort decsending
  // take the first value
  return numbers.sort((a, b) => b - a)[0];
}