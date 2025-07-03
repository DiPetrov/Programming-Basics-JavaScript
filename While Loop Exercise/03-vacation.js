function vacation(input) {
  let moneyNeeded = Number(input[0]);
  let moneySaved = Number(input[1]);

  let daysSpend = 0;
  let totalDays = 0;

  let index = 2;

  while (moneySaved < moneyNeeded && daysSpend < 5) {
    let action = input[index];
    let money = Number(input[index + 1]);
    totalDays++;

    if (action === 'spend') {
      daysSpend++;
      moneySaved = Math.max(0, moneySaved - money);
      if (daysSpend === 5) {
        console.log(`You can't save the money.`);
        console.log(`${totalDays}`);
      }
    } else if (action === 'save') {
      moneySaved += money;
    }

    if (moneySaved >= moneyNeeded) {
      console.log(`You saved the money for ${totalDays} days.`);
      return;
    }

    index += 2;
  }
}

vacation(['2000', '1000', 'spend', '1200', 'save', '2000']);
