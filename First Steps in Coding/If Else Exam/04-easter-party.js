function easterParty(guestsAmount, couvertPricePerson, desisBudget) {

  if (guestsAmount >= 10 && guestsAmount <= 15) {
    couvertPricePerson *= 0.85;
  } else if (guestsAmount > 15 && guestsAmount <= 20) {
    couvertPricePerson *= 0.8;
  } else if (guestsAmount > 20) {
    couvertPricePerson *= 0.75;
  }

  let cakePrice = desisBudget * 0.1;

  let totalCosts = cakePrice + couvertPricePerson * guestsAmount;

  if (desisBudget >= totalCosts) {
    console.log(
      `It is party time! ${(desisBudget - totalCosts).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `No party! ${(totalCosts - desisBudget).toFixed(2)} leva needed.`
    );
  }
}

easterParty(18, 30, 450);
