function movieStars(input) {
  let actorBudget = Number(input[0]);

  let index = 1;
  let command = input[index];
  let currentPay = 0;

  while (command !== 'ACTION') {
    let currentActor = command;

    if (currentActor.length > 15) {
      actorBudget -= actorBudget * 0.2;
    } else {
      index++;
      currentPay = Number(input[index]);
      actorBudget -= currentPay;
    }

    if (actorBudget < 0) {
      console.log(
        `We need ${Math.abs(actorBudget).toFixed(2)} leva for our actors.`
      );
      return;
    }

    index++;
    command = input[index];
  }

  if (actorBudget < 0) {
    console.log(
      `We need ${Math.abs(actorBudget - currentPay).toFixed(
        2
      )} leva for our actors.`
    );
  } else {
    console.log(`We are left with ${actorBudget.toFixed(2)} leva.`);
  }
}
// movieStars([
//   '90000',
//   'Christian Bale',
//   '70000.50',
//   'Leonard DiCaprio',
//   'Kevin Spacey',
//   '24000.99',
// ]);

// movieStars([
//   '170000',
//   'Ben Affleck',
//   '40000.50',
//   'Zahari Baharov',
//   '80000',
//   'Tom Hanks',
//   '2000.99',
//   'ACTION',
// ]);

// movieStars(['1000', 'John Cena', '800', 'Freddy Kim', '3000', 'ACTION']);
// movieStars([
//   '90000',
//   'Christian Bale',
//   '70000.50',
//   'Leonard DiCaprio',
//   'Kevin Spacey',
//   '24000.99',
//   'ACTION',
// ]);

// movieStars([
//   '600000',
//   'Michael Aniston',
//   '400000',
//   'Pamela Anderson',
//   '200010',
//   'ACTION',
// ]);

movieStars([
  '2000000',
  'Krasi Radkov',
  '50000',
  'Lyben Karakostov',
  'Brat Pitt',
  '1500000',
  'Tom Hardy',
]);

// movieStars(["2100000",
// "Homer Simpson",
// "1000000",
// "Tsvetomir Ivanovich",
// "ACTION"])

// movieStars(["2000000.5",
// "Jet Lee",
// "1000000",
// "Jackie Chan",
// "1000000",
// "ACTION"])
