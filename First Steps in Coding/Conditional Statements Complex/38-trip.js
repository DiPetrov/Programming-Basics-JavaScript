function trip([arg1, arg2]) {
  let budget = Number(arg1);
  let season = arg2;

  let destination = '';
  let costs = 0;
  let accommodation = '';

  if (budget <= 100) {
    destination = 'Bulgaria';
    if (season === 'summer') {
      accommodation = 'Camp';
      costs = budget * 0.3;
    } else if (season === 'winter') {
      accommodation = 'Hotel';
      costs = budget * 0.7;
    }
  } else if (budget > 100 && budget <= 1000) {
    destination = 'Balkans';
    if (season === 'summer') {
      accommodation = 'Camp';
      costs = budget * 0.4;
    } else if (season === 'winter') {
      accommodation = 'Hotel';
      costs = budget * 0.8;
    }
  } else if (budget > 1000) {
    destination = 'Europe';
    if (season === 'summer') {
      accommodation = 'Hotel';
      costs = budget * 0.9;
    } else if (season === 'winter') {
      accommodation = 'Hotel';
      costs = budget * 0.9;
    }
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${accommodation} - ${costs.toFixed(2)}`);
}
trip([50, 'summer']);
// trip([312, 'summer']);
// trip([75, 'winter']);
// trip([1500, 'summer']);
