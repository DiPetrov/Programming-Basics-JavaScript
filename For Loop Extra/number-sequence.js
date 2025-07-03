function test(input) {
  let minNum = 0;
  let maxNum = 0;
  let counter = false;

  for (let i = 0; i < input.length; i++) {
    let currentNumber = Number(input[i]);

    if (counter === false) {
     minNum = currentNumber;
     counter = true;
    }

    if (maxNum === 0) {
      maxNum = currentNumber;
      continue;
    }

    if (currentNumber > maxNum) {
     maxNum = currentNumber;
    }


    if (currentNumber < minNum) {
     minNum = currentNumber;
    }
   
  }

  console.log(`Max number: ${maxNum}`);
  console.log(`Min number: ${minNum}`);
}

// test([5, 10, 20, 304, 0, 50]);
// test([6, 250, 5, 2, 0, 100, 1000]);
// test([1005, 250, 6, 340, 8, 100, 1, 1000, 2000, 0]);
// test([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
test([45,17,13,500,600,0,77,0,4000,5,0])
