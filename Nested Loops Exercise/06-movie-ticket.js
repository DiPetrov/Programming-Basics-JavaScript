function cinemaTicket(input) {
  let studentTicketCount = 0;
  let standardTicketCount = 0;
  let kidTicketCount = 0;

  let index = 0;
  let command = input[index];

  while (command !== 'Finish') {
    let movieTitle = command;
    index++;

    let totalSeats = Number(input[index]);
    let seatsTaken = 0;

    index++;
    let command1 = input[index];

    while (command1 !== 'End') {
      let ticketType = command1;

      if (ticketType === 'student') {
        studentTicketCount++;
      } else if (ticketType === 'standard') {
        standardTicketCount++;
      } else if (ticketType === 'kid') {
        kidTicketCount++;
      }

      seatsTaken++;

      if (seatsTaken === totalSeats) {
        break;
      }

      index++;
      command1 = input[index];
    }

    let percentTaken = (seatsTaken / totalSeats) * 100;
    console.log(`${movieTitle} - ${percentTaken.toFixed(2)}% full.`);

    index++;
    command = input[index];
  }

  let totalTicketsCount =
    studentTicketCount + standardTicketCount + kidTicketCount;
  console.log(`Total tickets: ${totalTicketsCount}`);

  let studentTicketPercent = (studentTicketCount / totalTicketsCount) * 100;
  let standardTicketPercent = (standardTicketCount / totalTicketsCount) * 100;
  let kidTicketPercent = (kidTicketCount / totalTicketsCount) * 100;

  console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}

cinemaTicket([
  'Taxi',

  '10',

  'standard',

  'kid',

  'student',

  'student',

  'standard',

  'standard',

  'End',

  'Scary Movie',

  '6',

  'student',

  'student',

  'student',

  'student',

  'student',

  'student',

  'Finish',
]);
