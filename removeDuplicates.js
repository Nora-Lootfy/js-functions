const numbers = [1, 2, 3, 5, 4, 5, 6, 7, 8, 9, 11, 18, 22, 15, 27, 0, 9, 11, 9, 8];

console.log(removeDuplicates(numbers));

function removeDuplicates(numbers) {
  return Array.from(new Set(numbers));
}
