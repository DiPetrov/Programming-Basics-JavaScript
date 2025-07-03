function movieTicket(input) {
  let totalTickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let currentMovie = '';
  let index = 0;
  let command = input[index];

  while (command !== 'Finish') {
    currentMovie = command;
    index++;
    let freeSpaces = Number(input[index]);
    let ticketCounter = 0;

    index++;
    command = input[index];
    while (command !== 'End') {
      let currentTicket = input[index];
      ticketCounter++;

      if (currentTicket === 'standard') {
        standardTickets++;
      } else if (currentTicket === 'student') {
        studentTickets++;
      } else if (currentTicket === 'kid') {
        kidTickets++;
      }

      totalTickets++;
      if (ticketCounter >= freeSpaces) {
        break;
      }

      index++;
      command = input[index];
    }
    console.log(
      `${currentMovie} - ${((ticketCounter / freeSpaces) * 100).toFixed(
        2
      )}% full.`
    );

    index++;
    command = input[index];
  }

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(
    `${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`
  );
}

// movieTicket([
//   'Taxi',
//   '10',
//   'standard',
//   'kid',
//   'student',
//   'student',
//   'standard',
//   'standard',
//   'End',
//   'Scary Movie',
//   '6',
//   'student',
//   'student',
//   'student',
//   'student',
//   'student',
//   'student',
//   'Finish',
// ]);
movieTicket([
  'The Matrix',
  '20',
  'student',
  'standard',
  'kid',
  'kid',
  'student',
  'student',
  'standard',
  'student',
  'End',
  'The Green Mile',
  '17',
  'student',
  'standard',
  'standard',
  'student',
  'standard',
  'student',
  'End',
  'Amadeus',
  '3',
  'standard',
  'standard',
  'standard',
  'Finish',
]);
