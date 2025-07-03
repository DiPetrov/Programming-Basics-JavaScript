function gymnastics(arg1, arg2) {
  let country = arg1;
  let items = arg2;

  let points = 0;
  let percentNeeded = 0;

  switch (country) {
    case 'Bulgaria':
      switch (items) {
        case 'ribbon':
          points = 9600 + 9400;
          break;
        case 'rope':
          points = 9500 + 9400;
          break;
        case 'hoop':
          points = 9550 + 9750;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Russia':
      switch (items) {
        case 'ribbon':
          points = 9100 + 9400;
          break;
          
        case 'rope':
          points = 9600 + 9000;
          break;
        case 'hoop':
          points = 9300 + 9800;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Italy':
      switch (items) {
        case 'ribbon':
          points = 9200 + 9500;
          break;
        case 'rope':
          points = 9700 + 9150;
          break;
        case 'hoop':
          points = 9450 + 9350;
          break;
        default:
          console.log(`Error`);
      }
      break;
    default:
      console.log(`Error`);
  }

  percentNeeded = 20 - points * 0.001;

  console.log(
    `The team of ${country} get ${(points / 1000).toFixed(3)} on ${items}.`
  );
  console.log(`${((percentNeeded / 20) * 100).toFixed(2)}%`);
}
gymnastics('Bulgaria', 'ribbon');
gymnastics('Russia', 'rope');
gymnastics('Italy', 'hoop');
gymnastics('Germany', 'toy');
