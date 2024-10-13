const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 18, 22, 15, 27, 0, 9];

console.log(filterArray(numbers));

function filterArray(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
