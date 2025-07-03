function everest(arg1, arg2, arg3) {
  let num1 = Number(arg1);
  let num2 = Number(arg2);
  let num3 = Number(arg3);

  for (i = 1; i <= num1; i++) {
    for (x = 2; x <= num2; x++) {
      for (z = 1; z <= num3; z++) {
          console.log(`${i} ${x} ${z}`);
        }
      }
    }
  }

everest(3, 5, 5);
everest(8, 2, 8)
