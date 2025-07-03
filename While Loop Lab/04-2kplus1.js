function sequence2plus1(n) {
  let currentNum = 1;

  while (currentNum <= n) {
    console.log(currentNum);

    currentNum = currentNum * 2 + 1;
  }
}

sequence2plus1(3);
sequence2plus1(8);
sequence2plus1(17);
sequence2plus1(31);
