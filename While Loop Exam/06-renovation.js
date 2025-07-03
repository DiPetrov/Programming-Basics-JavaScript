function renovation(input) {
  let height = Number(input[0]);
  let width = Number(input[1]);
  let percent = Number(input[2]);

  let area = height * width * 4;
  let nonPaintArea = (area * percent) / 100;
  let totalArea = area - nonPaintArea;
  let index = 3;
  let command = input[index];
  let totalPaint = 0;

  while (command !== 'Tired!') {
    let currentPaint = Number(input[index]);

    totalArea -= currentPaint;
    if (totalArea < 0) {
      console.log(
        `All walls are painted and you have ${Math.abs(
          totalArea
        )} l paint left!`
      );
      return;
    } else if (totalArea === totalPaint) {
      console.log(`All walls are painted! Great job, Pesho!`);
      return;
    }

    index++;
    command = input[index];
  }

  console.log(`${Math.ceil(totalArea)} quadratic m left.`);
}
renovation(['3', '5', '10', '2', '3', '4', 'Tired!']);
renovation(['2', '3', '25', '6', '7', '8']);
