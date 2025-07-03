function matchTickets(arg1, arg2, arg3) {
  let budget = Number(arg1);
  let category = arg2;
  let peopleInGroup = Number(arg3);

  let ticketCosts = 0;

  if (peopleInGroup >= 5 && peopleInGroup <= 9) {
    budget *= 0.4;
  } else if (peopleInGroup >= 10 && peopleInGroup <= 24) {
    budget *= 0.5;
  } else if (peopleInGroup >= 25 && peopleInGroup <= 49) {
    budget *= 0.6;
  } else if (peopleInGroup >= 1 && peopleInGroup <= 4) {
    budget *= 0.25;
  } else if (peopleInGroup > 50) {
    budget *= 0.75;
  }

  if (category === 'Normal') {
    ticketCosts = peopleInGroup * 249.99;
  } else {
    ticketCosts = peopleInGroup * 499.99;
  }

  if (budget >= ticketCosts) {
    console.log(
      `Yes! You have ${(budget - ticketCosts).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${(ticketCosts - budget).toFixed(2)} leva. `
    );
  }
}
// matchTickets(1000, 'Normal', 1);
// matchTickets(30000, 'VIP', 49);
matchTickets(50000, 'Normal', 200);
