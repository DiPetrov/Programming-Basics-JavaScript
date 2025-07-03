function everest(arg1, arg2, arg3) {
  let num1 = Number(arg1);
  let num2 = Number(arg2);
  let num3 = Number(arg3);

  for (let i = 1; i <= num1; i++) {
    for (let x = 1; x <= num2; x++) {
      for (let z = 1; z <= num3; z++) {
        if (i % 2 === 0 && z % 2 === 0) {
          if (x > 1 && [2, 3, 5, 7].includes(x)) {
            console.log(`${i} ${x} ${z}`);
        
          }
        }
      }
    }
  }
}

everest(3, 5, 5);
// everest(8, 2, 8);
// everest(2,2,2)

