function vacation(arg1, arg2) {
  let budget = Number(arg1);
  let season = arg2;

  let location = 0;
  let accommodation = 0;
  let price = 0;

  if (budget <= 1000) {
    accommodation = 'Camp';
    if (season === 'Summer') {
      location = 'Alaska';
      price = budget * 0.65;
    } else if (season === 'Winter') {
      location = 'Morocco';
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    accommodation = 'Hut';
    if (season === 'Summer') {
      location = 'Alaska';
      price = budget * 0.8;
    } else if (season === 'Winter') {
      location = 'Morocco';
      price = budget * 0.6;
    }
  } else if (budget > 3000) {
    accommodation = 'Hotel';
    if (season === 'Summer') {
      location = 'Alaska';
      price = budget * 0.9;
    } else if (season === 'Winter') {
      location = 'Morocco';
      price = budget * 0.9;
    }
  }

  console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}

vacation(800, 'Summer');
