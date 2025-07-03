function worldSnooker(arg1, arg2, arg3, arg4) {
  let tournamentStage = arg1;
  let ticketType = arg2;
  let ticketsAmount = Number(arg3);
  let trophyPhoto = arg4;

  let ticketPrice = 0;

  switch (tournamentStage) {
    case 'Quarter final':
      switch (ticketType) {
        case 'Standard':
          ticketPrice += ticketsAmount * 55.5;
          break;

        case 'Premium':
          ticketPrice += ticketsAmount * 105.2;
          break;

        case 'VIP':
          ticketPrice += ticketsAmount * 118.9;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Semi final':
      switch (ticketType) {
        case 'Standard':
          ticketPrice += ticketsAmount * 75.88;
          break;

        case 'Premium':
          ticketPrice += ticketsAmount * 125.22;
          break;

        case 'VIP':
          ticketPrice += ticketsAmount * 300.4;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Final':
      switch (ticketType) {
        case 'Standard':
          ticketPrice += ticketsAmount * 110.1;
          break;

        case 'Premium':
          ticketPrice += ticketsAmount * 160.66;
          break;

        case 'VIP':
          ticketPrice += ticketsAmount * 400;
          break;
        default:
          console.log(`Error`);
      }
      break;
    default:
      console.log(`Error`);
  }

  if (ticketPrice > 4000) {
    trophyPhoto = 'N';
  }

  if (ticketPrice > 4000) {
    ticketPrice *= 0.75;
  } else if (ticketPrice > 2500 && ticketPrice <= 4000) {
    ticketPrice *= 0.9;
  }

  if (trophyPhoto === 'Y') {
    ticketPrice += ticketsAmount * 40;
  }

  console.log(ticketPrice.toFixed(2));
}

// worldSnooker('Final', 'Premium', '25', 'Y');
worldSnooker('Semi final', 'VIP', '9', 'Y');
// worldSnooker('Quarter final', 'Standard', '11', 'N');
