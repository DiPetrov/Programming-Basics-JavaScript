function carToGo(arg1, arg2) {
  let budget = Number(arg1);
  let season = arg2;

  let classType = '';
  let price = 0;
  let carType = '';

  if (budget <= 100) {
    classType = 'Economy class';
    if (season === 'Summer') {
      carType = 'Cabrio';
      price = budget * 0.35;
    } else if (season === 'Winter') {
      carType = 'Jeep';
      price = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    classType = 'Compact class';
    if (season === 'Summer') {
      carType = 'Cabrio';
      price = budget * 0.45;
    } else if (season === 'Winter') {
      carType = 'Jeep';
      price = budget * 0.8;
    }
  } else if (budget > 500) {
    classType = 'Luxury class';
    if (season === 'Summer') {
      carType = 'Jeep';
      price = budget * 0.9;
    } else if (season === 'Winter') {
      carType = 'Jeep';
      price = budget * 0.9;
    }
  }

  console.log(`${classType}`);
  console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo(450, 'Summer');
