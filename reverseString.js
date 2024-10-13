const str = "Hello World";

console.log(reverseString(str));

function reverseString(str) {

  let arr = [...str].reverse();

  return arr.join('');
}
