function numbers1to10() {
  let index = 1;
  let num = Number([index]);
  // for (i = 1; i <= 10; i++) {
  //  console.log(i);

  // }

  while (num <= 10) {
    console.log(num);

    index++;
    num = Number([index]);
  }
}
numbers1to10();
