function matchTicket([arg1, arg2, arg3]) {
  let budget = Number(arg1);
  let category = arg2;
  let people = Number(arg3);

  let price = 0;

  if (people >= 1 && people <= 4) {
    budget *= 0.25;
  } else if (people >= 5 && people <= 9) {
    budget *= 0.4;
  } else if (people >= 10 && people <= 24) {
    budget *= 0.5;
  } else if (people >= 25 && people <= 49) {
    budget *= 0.6;
  } else if (people >= 50) {
    budget *= 0.75;
  }

  if (category === 'VIP') {
    price = 499.99 * people;
  } else {
    price = 249.99 * people;
  }

  if (budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(price - budget).toFixed(2)} leva.`
    );
  }
}
matchTicket([1000, 'Normal', 1]);
matchTicket([30000, 'VIP', 49]);
