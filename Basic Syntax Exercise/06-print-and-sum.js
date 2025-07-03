function printAndSum(start, stop) {
  let sum = 0;
  let result = '';

  for (let i = start; i <= stop; i++) {
    sum += i;
    result += i + ' ';
  }
  console.log(result);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
