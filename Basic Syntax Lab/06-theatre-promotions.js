function theatrePromotions(arg1, arg2) {
  let day = arg1;
  let age = Number(arg2);
  let ticketPrice = 0;

  if (
    day === 'Monday' ||
    day === 'Tuesday' ||
    day === 'Wednesday' ||
    day === 'Thursday' ||
    day === 'Friday'
  ) {
    if (age >= 0 && age <= 18) {
      ticketPrice = 12;
      console.log(`${ticketPrice}$`);
    } else if (age > 18 && age <= 64) {
      ticketPrice = 18;
      console.log(`${ticketPrice}$`);
    } else if (age > 64 && age <= 122) {
      ticketPrice = 12;
      console.log(`${ticketPrice}$`);
    } else {
      console.log('Error!');
    }
  } else if (day === 'Sunday' || day === 'Saturday') {
    if (age >= 0 && age <= 18) {
      ticketPrice = 15;
      console.log(`${ticketPrice}$`);
    } else if (age > 18 && age <= 64) {
      ticketPrice = 20;
      console.log(`${ticketPrice}$`);
    } else if (age > 64 && age <= 122) {
      ticketPrice = 15;
      console.log(`${ticketPrice}$`);
    } else {
      console.log('Error!');
    }
  } else if (day === 'Holiday') {
    if (age >= 0 && age <= 18) {
      ticketPrice = 5;
      console.log(`${ticketPrice}$`);
    } else if (age > 18 && age <= 64) {
      ticketPrice = 12;
      console.log(`${ticketPrice}$`);
    } else if (age > 64 && age <= 122) {
      ticketPrice = 10;
      console.log(`${ticketPrice}$`);
    } else {
      console.log('Error!');
    }
  } else {
   console.log("Error!");
  }
}
theatrePromotions('Wednesday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Wednesday', 15);
