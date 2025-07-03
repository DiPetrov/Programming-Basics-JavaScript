// function sumNumbers(a) {
//   let numAsString = String(a);
//   let sum = 0;

//   for (let i = 0; i < numAsString.length; i++) {
//     let ch = numAsString.charAt(i);
//     let num = Number(ch);
//     sum += num;
//   }
//   console.log(`The sum of the digits is:${sum}`);
// }

// sumNumbers("1234");



// Solution 2 - Needs debudding! Solution 1 too!
function sumDigits(numberAsString) {
 let sum = 0

 for (let i = 0; i < numberAsString.length; i++) {
  sum+= Number(numberAsString[i]);
 }
 console.log(`The sum of the digits is:${sum}`);
 
}

sumDigits("1234")
