function oscarWeeks(arg1, arg2, arg3) {
  let movie = arg1;
  let hallType = arg2;
  let tickets = Number(arg3);

  let totalIncome = 0;

  switch (movie) {
    case 'A Star Is Born':
      switch (hallType) {
        case 'normal':
          totalIncome += tickets * 7.5;
          break;
        case 'luxury':
          totalIncome += tickets * 10.5;
          break;
        case 'ultra luxury':
          totalIncome += tickets * 13.5;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Bohemian Rhapsody':
      switch (hallType) {
        case 'normal':
          totalIncome += tickets * 7.35;
          break;
        case 'luxury':
          totalIncome += tickets * 9.45;
          break;
        case 'ultra luxury':
          totalIncome += tickets * 12.75;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Green Book':
      switch (hallType) {
        case 'normal':
          totalIncome += tickets * 8.15;
          break;
        case 'luxury':
          totalIncome += tickets * 10.25;
          break;
        case 'ultra luxury':
          totalIncome += tickets * 13.25;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'The Favourite':
      switch (hallType) {
        case 'normal':
          totalIncome += tickets * 8.75;
          break;
        case 'luxury':
          totalIncome += tickets * 11.55;
          break;
        case 'ultra luxury':
          totalIncome += tickets * 13.95;
          break;
        default:
          console.log(`Error`);
      }
      break;
    default:
      console.log(`Error`);
  }

  console.log(`${movie} -> ${totalIncome.toFixed(2)} lv.`);
}

oscarWeeks('A Star Is Born', 'luxury', 42);
oscarWeeks('Green Book', 'normal', 63);
oscarWeeks('The Favourite', 'ultra luxury', 34);
