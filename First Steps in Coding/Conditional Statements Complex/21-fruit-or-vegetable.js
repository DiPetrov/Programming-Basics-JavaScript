function fruitOrVegetable([arg1, arg2, arg3, arg4]) {
  let a = arg1;
  
  if (
    a === 'banana' ||
    a === 'apple' ||
    a === 'kiwi' ||
    a === 'cherry' ||
    a === 'lemon' ||
    a === 'grapes'
  ) {
    console.log('fruit');
  } else if (
    a === 'tomato' ||
    a === 'cucumber' ||
    a === 'pepper' ||
    a === 'carrot'
  ) {
    console.log('vegetable');
  } else {
    console.log('unknown');
  }
}
fruitOrVegetable(['banana']);
