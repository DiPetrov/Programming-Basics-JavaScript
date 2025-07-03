function filmPremier(arg1, arg2, arg3) {
  let projection = arg1;
  let moviePacket = arg2;
  let ticketsAmount = Number(arg3);

  let currentPrice = 0;

  switch (projection) {
    case 'John Wick':
      switch (moviePacket) {
        case 'Drink':
          currentPrice += ticketsAmount * 12;
          break;
        case 'Popcorn':
          currentPrice += ticketsAmount * 15;
          break;
        case 'Menu':
          currentPrice += ticketsAmount * 19;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Star Wars':
      switch (moviePacket) {
        case 'Drink':
          currentPrice += ticketsAmount * 18;
          break;
        case 'Popcorn':
          currentPrice += ticketsAmount * 25;
          break;
        case 'Menu':
          currentPrice += ticketsAmount * 30;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Jumanji':
      switch (moviePacket) {
        case 'Drink':
          currentPrice += ticketsAmount * 9;
          break;
        case 'Popcorn':
          currentPrice += ticketsAmount * 11;
          break;
        case 'Menu':
          currentPrice += ticketsAmount * 14;
          break;
        default:
          console.log(`Error`);
      }
      break;
    default:
      console.log(`Error`);
  }

  if (projection === 'Star Wars' && ticketsAmount >= 4) {
    currentPrice = currentPrice - currentPrice * 0.3;
  }

  if (projection === 'Jumanji' && ticketsAmount === 2) {
    currentPrice = currentPrice - currentPrice * 0.15;
  }

  console.log(`Your bill is ${currentPrice.toFixed(2)} leva.`);
}

filmPremier('John Wick', 'Drink', 6);
filmPremier('Star Wars', 'Popcorn', 4);
filmPremier('Jumanji', 'Menu', 2);
