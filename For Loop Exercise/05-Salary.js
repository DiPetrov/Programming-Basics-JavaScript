function salary(input) {
  let tabNumber = Number(input[0]);
  let salary = Number(input[1]);

  for (i = 2; i < input.length; i++) {
    let check = input[i];

    if (check === 'Facebook') {
      salary -= 150;
    } else if (check === 'Instagram') {
      salary -= 100;
    } else if (check === 'Reddit') {
      salary -= 50;
    }
  }

  if (salary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(salary);
  }
}
salary()