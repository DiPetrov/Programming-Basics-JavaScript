function moreBaggage(input) {
  let priceBaggageOver20kg = Number(input[0]);
  let baggageKG = Number(input[1]);
  let dayUntilTravel = Number(input[2]);
  let baggageAmount = Number(input[3]);

  let mimiBaggagePrice = 0;

  if (baggageKG < 10) {
    mimiBaggagePrice += priceBaggageOver20kg * 0.2;
  } else if (baggageKG >= 10 && baggageKG <= 20) {
    mimiBaggagePrice += priceBaggageOver20kg * 0.5;
  } else if (baggageKG > 20) {
    mimiBaggagePrice += priceBaggageOver20kg;
  }

  if (dayUntilTravel > 30) {
    mimiBaggagePrice *= 1.1;
  } else if (dayUntilTravel >= 7 && dayUntilTravel <= 30) {
    mimiBaggagePrice *= 1.15;
  } else if (dayUntilTravel < 7) {
    mimiBaggagePrice *= 1.4;
  }

  console.log(
    `The total price of bags is: ${(mimiBaggagePrice * baggageAmount).toFixed(
      2
    )} lv.`
  );
}

moreBaggage(["30", "18", "15", "2"]);
moreBaggage(["25.5", "5", "36","6"]);
moreBaggage(["63.8", "23", "3", "1"]);
