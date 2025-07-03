function hospital(input) {
  // Болницата има 7 лекари - всеки преглежда по един пациент
  // Всеки 3 ден болницата проверява дали броя на непрегледаните пациенти не е по-висок от броя на прегледаните.
  // Ако непрегледаните са повече се назначава оше един доктор. Назначаването е преди приема за деня!
  // Да се напище програма, която изчислява за даден период прегледаните и непрегледаните пациенти.

  let period = Number(input[0]);
  let treatedPatients = 0;
  let untreatedPatients = 0;
  let doctors = 7;

  for (let i = 1; i <= period; i++) {

    let patients = Number(input[i]);

    if (i % 3 === 0 && untreatedPatients > treatedPatients) {

     doctors++
    }

    if (patients <= doctors) {

     treatedPatients += patients;

    } else {
     treatedPatients += doctors;
     untreatedPatients += patients - doctors;

    }
      
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(['4', '7', '27', '9', '1']);
hospital(['6', '25', '25', '25', '25', '25', '2']);
hospital(['3', '7', '7', '7']);
