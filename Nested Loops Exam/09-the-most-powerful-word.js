function mostPowerfulWord(input) {
  let index = 0;
  command = input[index];
  let mostPowerfulWord = '';
  let mostPowerfulWordPoints = 0;

  while (command !== 'End of words') {
    let currentASCIsum = 0;
    for (let i = 0; i < command.length; i++) {
      let currentLetter = command[i].toLowerCase();
      let currentNumber = Number(command.charCodeAt(i));

      currentASCIsum += currentNumber;
    }

    if (
      command[0].toLowerCase() === 'a' ||
      command[0].toLowerCase() === 'e' ||
      command[0].toLowerCase() === 'i' ||
      command[0].toLowerCase() === 'o' ||
      command[0].toLowerCase() === 'u' ||
      command[0].toLowerCase() === 'y'
    ) {
      currentASCIsum *= command.length;
    } else {
      currentASCIsum = currentASCIsum / command.length;
    }

    if (currentASCIsum > mostPowerfulWordPoints) {
      mostPowerfulWordPoints = currentASCIsum;
      mostPowerfulWord = command;
    }
    index++;
    command = input[index];
  }

  console.log(
    `The most powerful word is ${mostPowerfulWord} - ${mostPowerfulWordPoints}`
  );
}
mostPowerfulWord([
  'The',
  'Most',
  'Powerful',
  'Word',
  'Is',
  'Experience',
  'End of words',
]);

mostPowerfulWord([
  'But',
  'Some',
  'People',
  'Say',
  "It's",
  'LOVE',
  'End of words',
]);

