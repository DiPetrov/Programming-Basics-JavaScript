function easterTrip(arg1, arg2, arg3) {
  let destination = arg1;
  let reservation = arg2;
  let days = Number(arg3);

  let currentPrice = 0;
  let totalCost = 0;

  switch (destination) {
    case 'France':
      switch (reservation) {
        case '21-23':
          currentPrice += 30;
          break;
        case '24-27':
          currentPrice += 35;
          break;
        case '28-31':
          currentPrice += 40;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Italy':
      switch (reservation) {
        case '21-23':
          currentPrice += 28;
          break;
        case '24-27':
          currentPrice += 32;
          break;
        case '28-31':
          currentPrice += 39;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Germany':
      switch (reservation) {
        case '21-23':
          currentPrice += 32;
          break;
        case '24-27':
          currentPrice += 37;
          break;
        case '28-31':
          currentPrice += 43;
          break;
        default:
          console.log(`Error`);
      } 
      break;
      default: console.log(`Error`);
           
  }

  totalCost = currentPrice * days;

  console.log(`Easter trip to ${destination} : ${totalCost.toFixed(2)} leva.`);
}

easterTrip('Germany', '24-27', 5);
easterTrip('Italy', '21-23', 7);
easterTrip('France', '28-31', 8);
