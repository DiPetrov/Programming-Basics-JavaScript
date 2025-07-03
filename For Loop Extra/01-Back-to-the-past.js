function backToThePast(a, b) {
 
  let heritage = Number(a);
  let yearLive = Number(b);
  let age = 17;

  let moneySpent = 0;

  for (i = 1800; i <= yearLive; i++) {
    age++;

    if (i % 2 !== 0) {

      moneySpent += 12000 + 50 * age;

    } else {

      moneySpent += 12000;
    }
  }
  if (heritage >= moneySpent) {

    console.log(
      `Yes! He will live a carefree life and will have ${(
        heritage - moneySpent
      ).toFixed(2)} dollars left.`
    );

  } else {

    console.log(
      `He will need ${(moneySpent - heritage).toFixed(2)} dollars to survive.`
    );
    
  }
}
backToThePast(50000, 1802);
backToThePast(100000.15, 1808);
