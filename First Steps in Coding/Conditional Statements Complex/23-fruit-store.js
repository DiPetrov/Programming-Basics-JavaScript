function fruitStore([arg1, arg2, arg3]) {
  let fruits = arg1.toLowerCase();
  let day = arg2.toLowerCase();
  let quantity = Number(arg3);

  let price = 0;

  if (day === 'saturday' || day === 'sunday') {
    if (fruits === 'banana') {
      price = quantity * 2.7;
      console.log(price.toFixed(2));
    } else if (fruits === 'apple') {
      price = quantity * 1.25;
      console.log(price.toFixed(2));
    } else if (fruits === 'orange') {
      price = quantity * 0.9;
      console.log(price.toFixed(2));
    } else if (fruits === 'grapefruit') {
      price = quantity * 1.6;
      console.log(price.toFixed(2));
    } else if (fruits === 'kiwi') {
      price = quantity * 3;
      console.log(price.toFixed(2));
    } else if (fruits === 'pineapple') {
      price = quantity * 5.6;
      console.log(price.toFixed(2));
    } else if (fruits === 'grapes') {
      price = quantity * 4.2;
      console.log(price.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else if (
    day === 'monday' ||
    day === 'tuesday' ||
    day === 'wednesday' ||
    day === 'thursday' ||
    day === 'friday'
  ) {
    if (fruits === 'banana') {
      price = quantity * 2.5;
      console.log(price.toFixed(2));
    } else if (fruits === 'apple') {
      price = quantity * 1.2;
      console.log(price.toFixed(2));
    } else if (fruits === 'orange') {
      price = quantity * 0.85;
      console.log(price.toFixed(2));
    } else if (fruits === 'grapefruit') {
      price = quantity * 1.45;
      console.log(price.toFixed(2));
    } else if (fruits === 'kiwi') {
      price = quantity * 2.7;
      console.log(price.toFixed(2));
    } else if (fruits === 'pineapple') {
      price = quantity * 5.5;
      console.log(price.toFixed(2));
    } else if (fruits === 'grapes') {
      price = quantity * 3.85;
      console.log(price.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else {
    console.log(`error`);
  }
}
// fruitStore(['orange', 'Sunday', 3]);
fruitStore(['kiwi', 'Monday', 2.5]);
// fruitStore(['grapes', 'Saturday', 0.5]);
// fruitStore(['tomato', 'Monday', 0.5]);
