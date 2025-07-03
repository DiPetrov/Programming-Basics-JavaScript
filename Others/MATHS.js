// Закръгляне на числа //
//developer.mozilla.org - мястото за учене на JavaScript//

/* Math.round - закръгля съответно надолу или нагоре в зависимост от стойността на числото */
let number = 5.433;
console.log(Math.round(number));

let secondNumber = 5.539;
console.log(Math.round(secondNumber));

/* Math.floor - закръгля дадено число но винаги надолу! */
let nubmersToFloor = 5.99;
console.log(Math.floor(nubmersToFloor));

/* Math.ceil - закръгля дадено чисоло но винаги нагоре! */
let numberToCeil = 5.13;
console.log(Math.ceil(numberToCeil));

/* Math.trunc - премахва дробното число */
let numberToTrunc = 2.63;
console.log(Math.trunc(numberToTrunc));

/*.toFixed() - закръгля число след десетичната запетая */
let num = 5.53453;
let n = num.toFixed(2);

/* Math.pow - returns the value of x to the power of y изплозва се за степенуване*/

/* charAt(index) принтира определен индекс от даден стринг. Идентичен е с .length*/
let text = 'SoftUni';
let letter = text.charAt(4);

/* Винаги взима полоцителната стойност на числото */
let num2 = -13;
let newNumber = Math.abs(num2);
console.log(newNumber);
