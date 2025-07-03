function hotelRoom([arg1, arg2]) {
  let season = arg1;
  let days = Number(arg2);

  let studioPrice = 0;
  let apartmentPrice = 0;

  if (season === 'May' || season === 'October') {
    studioPrice = days * 50;
    apartmentPrice = days * 65;
    if (days > 7 && days <= 14) {
      studioPrice = days * 50 * 0.95;
    } else if (days > 14) {
      studioPrice = days * 50 * 0.7;
      apartmentPrice = days * 65 * 0.9;
    }
  } else if (season === 'June' || season === 'September') {
    studioPrice = days * 75.2;
    apartmentPrice = days * 68.7;
    if (days > 14) {
      studioPrice = days * 75.2 * 0.8;
      apartmentPrice = days * 68.7 * 0.9;
    }
  } else if (season === 'July' || season === 'August') {
    studioPrice = days * 76;
    apartmentPrice = days * 77;
    if (days > 14) {
      apartmentPrice = days * 77 * 0.9;
    }
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(['June', 14]);
hotelRoom(['May', 15]);
hotelRoom(['August', 20]);
