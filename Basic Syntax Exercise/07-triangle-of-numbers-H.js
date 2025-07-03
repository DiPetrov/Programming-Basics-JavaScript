function triangleOfNumbers(num) {
  let result = '';

  for (let i = 0; i <= num; i++) {
    result = '';
    for (let j = 0; j < i; j++) {
      result += i + ' ';
    }

    console.log(result);
  }
}
triangleOfNumbers(5);
