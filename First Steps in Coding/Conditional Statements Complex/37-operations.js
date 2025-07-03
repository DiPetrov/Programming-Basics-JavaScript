function operations([arg1, arg2, arg3]) {
  let num1 = Number(arg1);
  let num2 = Number(arg2);
  let operator = arg3;

  let result = 0;
  let evenOrOdd = '';

  switch (operator) {
    case '+':
      result = num1 + num2;
      if (result % 2 === 0) {
        evenOrOdd = 'even';
      } else {
        evenOrOdd = 'odd';
      }
      console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
      break;

    case '-':
      result = num1 - num2;
      if (result % 2 === 0) {
        evenOrOdd = 'even';
      } else {
        evenOrOdd = 'odd';
      }
      console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);
      break;

    case '*':
      result = num1 * num2;
      if (result % 2 === 0) {
        evenOrOdd = 'even';
      } else {
        evenOrOdd = 'odd';
      }
      console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);
      break;

    case '/':
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
      } else {
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
      }
      break;

    case '%':
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
      } else {
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
      }
      break;
    default:
  }
}
operations([10, 1, '-']);
operations([7, 3, '*']);
operations([123, 12, '/']);
operations([10, 3, '%']);
operations([10, 12, '+']);
operations([112, 0, '/']);
